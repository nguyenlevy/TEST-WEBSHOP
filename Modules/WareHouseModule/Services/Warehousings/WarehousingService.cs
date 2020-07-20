using AutoMapper;
using Core.Core;
using Core.Core.Helper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarehousingModule.Core;
using WarehousingModule.Models.OrderItems;
using WarehousingModule.Models.OrderNotes;
using WarehousingModule.Models.Orders;
using WarehousingModule.Models.Orders.Dto;
using WarehousingModule.Models.UserModified;
using WarehousingModule.Services.Inventories;
using WarehousingModule.Services.Warehousings;

namespace CustomerModule.Services.Warehousings
{
    public class WarehousingService : IWarehousingService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkWarehousing _unitOfWork;
        private readonly IInventoryWarehousingService _inventoryService;
        public WarehousingService(
            IMapper mapper,
            IUnitOfWorkWarehousing unitOfWork,
            IInventoryWarehousingService inventoryService)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _inventoryService = inventoryService;
        }

        public async Task<ApiJsonResult> Create(UserModified userModified, OrderItemDto data)
        {
            var result = new ApiJsonResult();
            var orderItemModels = new List<OrderItem>();
            foreach (var productData in data.Products)
            {
                var orderItem = new OrderItem
                {
                    TenantId = userModified.TenantId.Value,
                    ProductId = productData.Id,
                    Amount = productData.Amount,
                    Price = productData.Price,
                    CreatedDate = DateTime.Now,
                    UserModifiedId = userModified.UserId
                };
                orderItemModels.Add(orderItem);
            }
            var orderModel = new Order
            {
                CustomerId = data.CustomerId,
                TenantId = userModified.TenantId.Value,
                OrderNote = new OrderNote
                {
                    TenantId = userModified.TenantId.Value,
                    Note = data.OrderNote,
                    CreatedDate = DateTime.Now,
                    UserModifiedId = userModified.UserId
                },
                OrderCode = Constants.GenerateCode(),
                OrderItems = orderItemModels,
                SaleDate = data.SaleDateUtc,
                CreatedDate = DateTime.Now,
                UserModifiedId = userModified.UserId,
                OrderType = data.OrderType,
                OrderTotal = data.OrderTotal,
                OrderDiscount = data.OrderDiscount,
                OrderPaid = data.OrderPaid,
                OrderDebt = data.OrderDebt,
                OrderTax = data.OrderTax,
                OrderStatusId = OrderStatus.Ordered,
                PaymentMethodId = data.PaymentMethodId,
                StoreId = data.StoreId
            };
            _unitOfWork.OrderRepository.Create(orderModel);
            await _unitOfWork.Commit();
            await _inventoryService.UpdateAllInventories(orderModel.Id, orderModel.SaleDate, userModified);
            return result;
        }

        public async Task<ApiJsonResult> Delete(UserModified userModified, int id)
        {
            var result = new ApiJsonResult();
            var order = await GetById(id).AsNoTracking().FirstOrDefaultAsync();
            if (order == null)
            {
                result.Code = CodeModel.Fail;
                result.Message = "Order is not found";
                return result;
            }
            var orderNoteModel = await _unitOfWork.OrderNoteRepository
                                    .FindByCondition(on => on.OrderId == order.Id)
                                    .FirstOrDefaultAsync();
            if (orderNoteModel != null)
            {
                _unitOfWork.OrderNoteRepository.Delete(orderNoteModel);
            }
            var orderItemModels = await _unitOfWork.OrderItemRepository
                                        .FindByCondition(oi => oi.OrderId == order.Id)
                                        .AsNoTracking()
                                        .ToListAsync();
            if (orderItemModels.Any())
            {
                _unitOfWork.OrderItemRepository.RemoveRange(orderItemModels);
            }

            _unitOfWork.OrderRepository.Delete(order);
            await _unitOfWork.Commit();
            return result;
        }

        public async Task<List<OrderDto>> GetByFilter(OrderFilter orderFilter)
        {
            var queryOrders = _unitOfWork.OrderRepository.FindByCondition(o => o.OrderType == OrderType.Warehousing)
                                                            .Include(o => o.Store)
                                                            .Include(o => o.Seller)
                                                            .Include(o => o.Customer)
                                                            .AsNoTracking();
            if (orderFilter.OrderId.HasValue)
            {
                queryOrders = queryOrders.Where(p => p.Id == orderFilter.OrderId.Value);
            }
            else if (orderFilter.TenantId.HasValue)
            {
                queryOrders = queryOrders.Where(p => p.TenantId == orderFilter.TenantId.Value);
            }

            var orders = await queryOrders.ToListAsync();
            var orderIds = orders.Select(o => o.Id).ToList();
            if (orderIds.Any())
            {
                var orderItems = await _unitOfWork.OrderItemRepository
                                        .FindByCondition(oi => orderIds.Contains(oi.OrderId))
                                        .AsNoTracking()
                                        .Include(oi => oi.Product)
                                        .ToListAsync();
                var orderNotes = await _unitOfWork.OrderNoteRepository
                                        .FindByCondition(on => orderIds.Contains(on.OrderId))
                                        .AsNoTracking()
                                        .ToListAsync();
                foreach (var order in orders)
                {
                    order.OrderItems = orderItems.Where(oi => oi.OrderId == order.Id).ToList();
                    order.OrderNote = orderNotes.Where(on => on.OrderId == order.Id).FirstOrDefault();
                }
            }
            var data = _mapper.Map<List<OrderDto>>(orders);
            foreach(var warehousing in data)
            {
                warehousing.Amount = warehousing.OrderItems.Sum(o => o.Amount);
            }
            return data;
        }

        public IQueryable<Order> GetById(int id)
        {
            return _unitOfWork.OrderRepository.FindByCondition(p => p.Id == id);
        }

        public async Task<ApiJsonResult> Update(UserModified userModified, int orderId, OrderItemDto data)
        {
            var result = new ApiJsonResult();
            var orderModel = await GetById(orderId).AsNoTracking().FirstOrDefaultAsync();
            var orderItems = await GetAllOrderItems();
            if (orderModel == null)
            {
                result.Code = CodeModel.Fail;
                result.Message = $"Order not found with orderId {orderId}";
                return result;
            }
            var orderItemModels = await _unitOfWork.OrderItemRepository
                                        .FindByCondition(oi => oi.OrderId == orderId)
                                        .AsNoTracking()
                                        .ToListAsync();
            var orderItemProductIds = orderItemModels.Select(o => o.ProductId);
            var productIds = data.Products.Select(p => p.Id);

            // delete order items
            var deleteOrderItems = orderItemModels
                            .Where(o => !productIds.Contains(o.ProductId)).ToList();
            _unitOfWork.OrderItemRepository.RemoveRange(deleteOrderItems);

            // update order items
            var updateOrderItems = orderItemModels
                            .Where(o => productIds.Contains(o.ProductId)).ToList();
            foreach (var orderItem in updateOrderItems)
            {
                var productFound = data.Products.Where(p => p.Id == orderItem.ProductId).FirstOrDefault();
                if (productFound == null)
                {
                    continue;
                }
                orderItem.Amount = productFound.Amount;
                orderItem.ModifiedDate = DateTime.Now;
            }

            // add new order items
            var newOrderItems = data.Products
                .Where(p => !orderItemProductIds.Contains(p.Id))
                .ToList();
            foreach (var newOrderItem in newOrderItems)
            {
                var orderItem = new OrderItem
                {
                    TenantId = userModified.TenantId.Value,
                    ProductId = newOrderItem.Id,
                    Amount = newOrderItem.Amount,
                    Price = newOrderItem.Price,
                    CreatedDate = DateTime.Now,
                    UserModifiedId = userModified.UserId
                };
                updateOrderItems.Add(orderItem);
            }

            var orderNoteModel = await _unitOfWork.OrderNoteRepository
                                        .FindByCondition(on => on.OrderId == orderId)
                                        .AsNoTracking()
                                        .FirstOrDefaultAsync();
            if (orderNoteModel != null)
            {
                orderNoteModel.Note = data.OrderNote;
                orderNoteModel.ModifiedDate = DateTime.Now;
                orderNoteModel.UserModifiedId = userModified.UserId;
                orderModel.OrderNote = orderNoteModel;
            }
            orderModel.CustomerId = data.CustomerId;
            orderModel.OrderItems = updateOrderItems;
            orderModel.SaleDate = data.SaleDateUtc;
            orderModel.ModifiedDate = DateTime.Now;
            orderModel.OrderTotal = data.OrderTotal;
            orderModel.OrderDiscount = data.OrderDiscount;
            orderModel.OrderPaid = data.OrderPaid;
            orderModel.OrderDebt = data.OrderDebt;
            orderModel.UserModifiedId = userModified.UserId;
            orderModel.PaymentMethodId = data.PaymentMethodId;
            orderModel.StoreId = data.StoreId;
            _unitOfWork.OrderRepository.Update(orderModel);
            await _unitOfWork.Commit();
            return result;
        }

        private async Task<List<OrderItem>> GetAllOrderItems()
        {
            var orderIds = await _unitOfWork.OrderRepository
                                            .FindByCondition(o => o.OrderType == OrderType.Order || o.OrderType == OrderType.Sale)
                                            .AsNoTracking()
                                            .Select(o => o.Id)
                                            .ToListAsync();
            var orderItems = await _unitOfWork.OrderItemRepository
                                              .FindByCondition(oi => orderIds.Contains(oi.OrderId))
                                              .AsNoTracking()
                                              .ToListAsync();
            return orderItems;
        }
    }
}
