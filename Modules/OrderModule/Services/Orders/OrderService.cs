using AutoMapper;
using Core.Core;
using Core.Core.Helper;
using Microsoft.EntityFrameworkCore;
using OrderModule.Core;
using OrderModule.Models.Inventories;
using OrderModule.Models.OrderItems;
using OrderModule.Models.OrderNotes;
using OrderModule.Models.Orders;
using OrderModule.Models.Orders.Dto;
using OrderModule.Models.Shipments;
using OrderModule.Models.UserModified;
using OrderModule.Services.Inventories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderModule.Services.Orders
{
    public class OrderService : IOrderService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkOrder _unitOfWork;
        private readonly IInventoryOrderService _inventoryService;
        private readonly OrderDbContext _salesDbContext;
        public OrderService(
            IMapper mapper,
            IUnitOfWorkOrder unitOfWork,
            IInventoryOrderService inventoryService,
            OrderDbContext salesDbContext
            )
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
            _inventoryService = inventoryService;
            _salesDbContext = salesDbContext;
        }

        public async Task<ApiJsonResult> Create(int? tenantId, long userId, OrderItemDto data)
        {
            var result = new ApiJsonResult();
            var orderItemModels = new List<OrderItem>();
            foreach (var product in data.Products)
            {
                var orderItem = new OrderItem
                {
                    TenantId = tenantId.Value,
                    ProductId = product.Id,
                    Amount = product.Amount,
                    Price = product.Price,
                    CreatedDate = DateTime.Now,
                    UserModifiedId = userId
                };
                orderItemModels.Add(orderItem);
            }
            var orderModel = new Order
            {
                CustomerId = data.CustomerId,
                SellerId = data.SellerId,
                TenantId = tenantId.Value,
                OrderNote = new OrderNote
                {
                    TenantId = tenantId.Value,
                    Note = data.OrderNote,
                    CreatedDate = DateTime.Now,
                    UserModifiedId = userId
                },
                OrderCode = Constants.GenerateCode(),
                OrderItems = orderItemModels,
                SaleDate = data.SaleDateUtc,
                CreatedDate = DateTime.Now,
                UserModifiedId = userId,
                OrderType = data.OrderType,
                OrderTotal = data.OrderTotal,
                OrderDiscount = data.OrderDiscount,
                OrderPaid = data.OrderPaid,
                OrderDebt = data.OrderDebt,
                StoreId = data.StoreId,
                OrderStatusId = OrderStatus.Ordered
            };

            switch (data.OrderType)
            {
                case OrderType.Order:
                    if (data.CarrierId.HasValue)
                    {
                        var shipment = new Shipment
                        {
                            TenantId = tenantId.Value,
                            DeliveryDateUtc = data.DeliveryDate,
                            Note = data.ShipmentNote,
                            Shipper = data.Shipper,
                            CarrierId = data.CarrierId,
                            CreatedDate = DateTime.Now,
                            UserModifiedId = userId
                        };
                        orderModel.Shipment = shipment;
                    }
                    break;
                case OrderType.Sale:
                case OrderType.ReturnSupplier:
                    orderModel.PaymentMethodId = data.PaymentMethodId;
                    break;
                default:
                    break;
            }
            _salesDbContext.Add(orderModel);
            await _unitOfWork.Commit();
            var userModified = new UserModified
            {
                TenantId = tenantId,
                UserId = userId
            };
            await _inventoryService.UpdateAllInventories(orderModel.Id, userModified);
            return result;
        }

        public async Task<ApiJsonResult> Delete(int? tenantId, long userId, int id)
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

            var shipmentModel = await _unitOfWork.ShipmentRepository
                        .FindByCondition(s => s.OrderId == order.Id)
                        .AsNoTracking()
                        .FirstOrDefaultAsync();
            if (shipmentModel != null)
            {
                _unitOfWork.ShipmentRepository.Delete(shipmentModel);
            }
            _unitOfWork.OrderRepository.Delete(order);
            await _unitOfWork.Commit();
            var userModified = new UserModified
            {
                TenantId = tenantId,
                UserId = userId
            };
            return result;
        }

        public async Task<List<OrderDto>> GetByFilter(OrderFilter orderFilter)
        {
            var queryOrders = _unitOfWork.OrderRepository.FindByCondition(o => o.OrderType == OrderType.Order || o.OrderType == OrderType.Sale || o.OrderType == OrderType.ReturnSupplier)
                                                            .Include(o => o.Store)
                                                            .Include(o => o.Seller)
                                                            .Include(o => o.Customer)
                                                            .AsNoTracking();
            if (orderFilter.OrderId.HasValue)
            {
                queryOrders = queryOrders.Where(p => p.Id == orderFilter.OrderId.Value);
                if (queryOrders.FirstOrDefault().OrderType == OrderType.Order)
                {
                    queryOrders = queryOrders.Include(o => o.Shipment);
                }
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
            return _mapper.Map<List<OrderDto>>(orders);
        }

        public IQueryable<Order> GetById(int id)
        {
            return _unitOfWork.OrderRepository.FindByCondition(p => p.Id == id);
        }

        public async Task<ApiJsonResult> Update(int? tenantId, long userId, int orderId, OrderItemDto data)
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
            if (deleteOrderItems.Any())
            {
                _unitOfWork.OrderItemRepository.RemoveRange(deleteOrderItems);
            }

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
                var orderItemsFound = orderItems
                                    .Where(o => o.ProductId == orderItem.ProductId && o.Id != orderItem.Id)
                                    .ToList();
                orderItem.Amount = productFound.Amount;
                orderItem.ModifiedDate = DateTime.Now;
            }

            // add new order items
            var newOrderItems = data.Products
                .Where(p => !orderItemProductIds.Contains(p.Id))
                .ToList();
            foreach (var newOrderItem in newOrderItems)
            {
                var orderItemsFound = orderItems
                                    .Where(o => o.ProductId == newOrderItem.Id)
                                    .ToList();
                var orderItem = new OrderItem
                {
                    TenantId = tenantId.Value,
                    ProductId = newOrderItem.Id,
                    Amount = newOrderItem.Amount + orderItemsFound.Sum(o => o.Amount),
                    Price = newOrderItem.Price,
                    CreatedDate = DateTime.Now,
                    UserModifiedId = userId
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
                orderNoteModel.UserModifiedId = userId;
                orderModel.OrderNote = orderNoteModel;
            }
            orderModel.CustomerId = data.CustomerId;
            orderModel.SellerId = data.SellerId;
            orderModel.OrderItems = updateOrderItems;
            orderModel.SaleDate = data.SaleDateUtc;
            orderModel.ModifiedDate = DateTime.Now;
            orderModel.OrderTotal = data.OrderTotal;
            orderModel.OrderDiscount = data.OrderDiscount;
            orderModel.OrderPaid = data.OrderPaid;
            orderModel.OrderDebt = data.OrderDebt;
            orderModel.StoreId = data.StoreId;
            orderModel.UserModifiedId = userId;

            switch (orderModel.OrderType)
            {
                case OrderType.Order:
                    var shipmentModel = await _unitOfWork.ShipmentRepository
                        .FindByCondition(s => s.OrderId == orderId)
                        .AsNoTracking()
                        .FirstOrDefaultAsync();
                    if (shipmentModel == null)
                    {
                        shipmentModel = new Shipment();
                        shipmentModel.CreatedDate = DateTime.Now;
                    }
                    else
                    {
                        shipmentModel.ModifiedDate = DateTime.Now;

                    }
                    shipmentModel.UserModifiedId = userId;
                    shipmentModel.DeliveryDateUtc = data.DeliveryDate;
                    shipmentModel.CarrierId = data.CarrierId;
                    shipmentModel.Note = data.ShipmentNote;
                    shipmentModel.Shipper = data.Shipper;
                    orderModel.Shipment = shipmentModel;
                    break;
                case OrderType.Sale:
                    orderModel.PaymentMethodId = data.PaymentMethodId;
                    break;
                default:
                    break;
            }
            _unitOfWork.OrderRepository.Update(orderModel);
            await _unitOfWork.Commit();
            var userModified = new UserModified
            {
                TenantId = tenantId,
                UserId = userId
            };
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
