using AutoMapper;
using Core.Core;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TurnoverModule.Core;
using TurnoverModule.Models.Orders;
using TurnoverModule.Models.Turnovers;

namespace TurnoverModule.Services
{
    public class TurnoverService : ITurnoverService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkTurnover _unitOfWork;
        public TurnoverService(
            IMapper mapper,
            IUnitOfWorkTurnover unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        public async Task<ApiJsonResult> GetByFilter(TurnoverFilter turnoverFilter)
        {
            var result = new ApiJsonResult();
            var turnovers = _unitOfWork.OrderRepository
                                            .FindByCondition(o => o.TenantId == turnoverFilter.TenantId
                                                && (o.OrderType == OrderType.Order || o.OrderType == OrderType.Sale || o.OrderType == OrderType.ReturnSupplier))
                                            .AsNoTracking();
            switch (turnoverFilter.TurnoverType)
            {
                case TurnoverType.Product:
                    result.Data = await GetListByProduct(turnovers);
                    break;
                case TurnoverType.Seller:
                    result.Data = await GetListBySeller(turnovers);
                    break;
                case TurnoverType.Store:
                    result.Data = await GetListByStore(turnovers);
                    break;
                case TurnoverType.Time:
                    result.Data = await GetListByTime(turnovers);
                    break;
                default:
                    break;
            }
            return result;
        }

        private async Task<List<TurnoverByProduct>> GetListByProduct(IQueryable<Order> turnovers)
        {
            var turnoverIds = turnovers.Select(o => o.Id).ToList();
            var turnoversFilter = await _unitOfWork.OrderItemRepository
                                            .FindByCondition(o => turnoverIds.Contains(o.OrderId))
                                            .AsNoTracking()
                                            .Include(o => o.Product)
                                            .Include(o => o.Order)
                                            .ToListAsync();
            var data = turnoversFilter
                .GroupBy(o => o.ProductId)
                .Select(o => new TurnoverByProduct
                {
                    Id = o.FirstOrDefault().Id,
                    ProductId = o.FirstOrDefault().ProductId,
                    ProductName = o.FirstOrDefault().Product?.Name,
                    ProductCode = o.FirstOrDefault().Product?.ProductCode,
                    SoldAmount = o.Sum(x => (x.Order.OrderType == OrderType.Sale || x.Order.OrderType == OrderType.Order) ? x.Amount : 0),
                    SaleProceeds = o.Sum(x => (x.Order.OrderType == OrderType.Sale || x.Order.OrderType == OrderType.Order) ? x.Price : 0),
                    ReturnedAmount = o.Sum(x => (x.Order.OrderType == OrderType.ReturnSupplier) ? x.Amount : 0),
                    MoneyReturned = o.Sum(x => (x.Order.OrderType == OrderType.ReturnSupplier) ? x.Price : 0)
                })
                .ToList();
            return data;
        }

        private async Task<List<TurnoverBySeller>> GetListBySeller(IQueryable<Order> turnovers)
        {
            var turnoversFilter = await turnovers.Include(o => o.Seller)
                                           .ToListAsync();           
            var turnoverIds = turnoversFilter.Select(o => o.Id).ToList();
            if (turnoverIds.Any())
            {
                var orderItems = await _unitOfWork.OrderItemRepository
                                        .FindByCondition(oi => turnoverIds.Contains(oi.OrderId))
                                        .AsNoTracking()
                                        .ToListAsync();
                foreach (var order in turnoversFilter)
                {
                    order.OrderItems = orderItems.Where(oi => oi.OrderId == order.Id).ToList();
                }
            }
            var data = turnoversFilter
                .GroupBy(o => o.SellerId)
                .Select(o => new TurnoverBySeller
                {
                    Id = o.FirstOrDefault().Id,
                    SellerId = o.FirstOrDefault()?.SellerId,
                    SellerName = o.FirstOrDefault()?.Seller?.Name,
                    SaleProceeds = o.Sum(x => (x.OrderType == OrderType.Order || x.OrderType == OrderType.Sale) ? x.OrderItems.Sum(oi => oi.Price) : 0),
                    OrderAmount = o.Sum(x => (x.OrderType == OrderType.Order || x.OrderType == OrderType.Sale) ? x.OrderItems.Count : 0),
                    GoodsSoldAmount = o.Sum(x => (x.OrderType == OrderType.Order || x.OrderType == OrderType.Sale) ? x.OrderItems.Sum(o => o.Amount) : 0),
                    MoneyReturned = o.Sum(x => x.OrderType == OrderType.ReturnSupplier ? x.OrderItems.Sum(oi => oi.Price) : 0),
                    OrderReturned = o.Sum(x => x.OrderType == OrderType.ReturnSupplier ? x.OrderItems.Count : 0),
                    GoodsReturnAmount = o.Sum( x=> x.OrderType == OrderType.ReturnSupplier ? x.OrderItems.Sum(oi => oi.Amount) : 0)
                })
                .ToList();           
            return data;
        }

        private async Task<List<TurnoverByStore>> GetListByStore(IQueryable<Order> turnovers)
        {
            var turnoversFilter = await turnovers.Include(o => o.Store)
                                           .ToListAsync();
            var turnoverIds = turnoversFilter.Select(o => o.Id).ToList();
            if (turnoverIds.Any())
            {
                var orderItems = await _unitOfWork.OrderItemRepository
                                        .FindByCondition(oi => turnoverIds.Contains(oi.OrderId))
                                        .AsNoTracking()
                                        .ToListAsync();
                foreach (var order in turnoversFilter)
                {
                    order.OrderItems = orderItems.Where(oi => oi.OrderId == order.Id).ToList();
                }
            }
            var data = turnoversFilter
                .GroupBy(o => o.StoreId)
                .Select(o => new TurnoverByStore
                {
                    Id = o.FirstOrDefault().Id,
                    StoreId = o.FirstOrDefault()?.StoreId,
                    StoreName = o.FirstOrDefault()?.Store?.Name,
                    SaleProceeds = o.Sum(x => (x.OrderType == OrderType.Order || x.OrderType == OrderType.Sale) ? x.OrderItems.Sum(oi => oi.Price) : 0),
                    OrderAmount = o.Sum(x => (x.OrderType == OrderType.Order || x.OrderType == OrderType.Sale) ? x.OrderItems.Count : 0),
                    GoodsSoldAmount = o.Sum(x => (x.OrderType == OrderType.Order || x.OrderType == OrderType.Sale) ? x.OrderItems.Sum(o => o.Amount) : 0),
                    MoneyReturned = o.Sum(x => x.OrderType == OrderType.ReturnSupplier ? x.OrderItems.Sum(oi => oi.Price) : 0),
                    OrderReturned = o.Sum(x => x.OrderType == OrderType.ReturnSupplier ? x.OrderItems.Count : 0),
                    GoodsReturnAmount = o.Sum(x => x.OrderType == OrderType.ReturnSupplier ? x.OrderItems.Sum(oi => oi.Amount) : 0)
                })
                .ToList();
            return data;
        }

        private async Task<List<TurnoverByTime>> GetListByTime(IQueryable<Order> turnovers)
        {
            var turnoversFilter = await turnovers.Include(o => o.Store)
                                           .Include(o => o.Seller)
                                           .Include(o => o.Customer)
                                           .ToListAsync();
            var turnoverIds = turnoversFilter.Select(o => o.Id).ToList();
            if (turnoverIds.Any())
            {
                var orderItems = await _unitOfWork.OrderItemRepository
                                        .FindByCondition(oi => turnoverIds.Contains(oi.OrderId))
                                        .AsNoTracking()
                                        .ToListAsync();
                foreach (var order in turnoversFilter)
                {
                    order.OrderItems = orderItems.Where(oi => oi.OrderId == order.Id).ToList();
                }
            }
            var data = turnoversFilter.Select(o => new TurnoverByTime
            {
                Id = o.Id,
                OrderCode = o.OrderCode,
                SaleDate = o.SaleDate,
                SellerId = o.SellerId,
                SellerName = o.Seller?.Name,
                CustomerId = o.CustomerId,
                CustomerName = o.Customer?.Name,
                Quantity = o.OrderItems.Count,
                TotalAmount = o.OrderItems.Sum(o => o.Amount),
                Total = o.OrderItems.Sum(o => o.Price)
            }).ToList();
            return data;
        }
    }
}
