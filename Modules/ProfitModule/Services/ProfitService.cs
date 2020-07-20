using AutoMapper;
using Core.Core;
using Microsoft.EntityFrameworkCore;
using ProfitModule.Core;
using ProfitModule.Models.Orders;
using ProfitModule.Models.Profits;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProfitModule.Services
{
    public class ProfitService : IProfitService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkProfit _unitOfWork;
        public ProfitService(
            IMapper mapper,
            IUnitOfWorkProfit unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }
        public async Task<ApiJsonResult> GetByFilter(ProfitFilter profitFilter)
        {
            var result = new ApiJsonResult();
            var profits = await _unitOfWork.OrderRepository
                                            .FindByCondition(o => o.TenantId == profitFilter.TenantId
                                                && (o.OrderType == OrderType.Order || o.OrderType == OrderType.Sale || o.OrderType == OrderType.ReturnSupplier))
                                            .AsNoTracking()
                                            .ToListAsync();
            switch (profitFilter.TurnoverType)
            {
                case ProfitType.Product:
                    result.Data = await GetListByProduct(profits);
                    break;
                case ProfitType.Store:
                    result.Data = await GetListByStore(profits);
                    break;
                case ProfitType.Time:
                    result.Data = await GetListByTime(profits);
                    break;
                default:
                    break;
            }
            return result;
        }

        private async Task<List<ProfitByProduct>> GetListByProduct(List<Order> profits)
        {
            var profitIds = profits.Select(o => o.Id).ToList();
            var orderItems = await _unitOfWork.OrderItemRepository
                                        .FindByCondition(oi => profitIds.Contains(oi.OrderId))
                                        .Include(o => o.Product)
                                        .Include(o => o.Order)
                                        .AsNoTracking()
                                        .ToListAsync();
            var data = orderItems.GroupBy(o => o.ProductId)
                                 .Select(o => new ProfitByProduct
                                 {
                                     Id = o.FirstOrDefault().Id,
                                     ProductId = o.FirstOrDefault().ProductId,
                                     ProductName = o.FirstOrDefault().Product?.Name,
                                     ProductCode = o.FirstOrDefault().Product?.ProductCode,
                                     SoldAmount = o.Sum(x => (x.Order.OrderType == OrderType.Order || x.Order.OrderType == OrderType.Sale) ? x.Amount : 0),
                                     ReturnedAmount = o.Sum(x => (x.Order.OrderType == OrderType.ReturnSupplier) ? x.Amount : 0),
                                     Discount = o.Sum(x => x.DiscountAmount),
                                     Revenue = o.Sum(x => (x.Order.OrderType == OrderType.Order || x.Order.OrderType == OrderType.Sale) ? x.Price : 0),
                                     MoneyReturned = o.Sum(x => (x.Order.OrderType == OrderType.ReturnSupplier) ? x.Price : 0),
                                     Capital = o.Sum(x => x.Product.Cost),
                                     Interest = o.Sum(x => x.Product.Price),
                                 }).ToList();
            return data;
        }

        private async Task<List<ProfitByStore>> GetListByStore(List<Order> profits)
        {
            var profitIds = profits.Select(o => o.Id).ToList();
            var orderItems = await _unitOfWork.OrderItemRepository
                                        .FindByCondition(oi => profitIds.Contains(oi.OrderId))
                                        .Include(o => o.Product)
                                        .Include(o => o.Order)
                                            .ThenInclude(x => x.Store)
                                        .AsNoTracking()
                                        .ToListAsync();
            var data = orderItems.GroupBy(o => o.Order.StoreId)
                                 .Select(o => new ProfitByStore
                                 {
                                     Id = o.FirstOrDefault().Id,
                                     StoreId = o.FirstOrDefault().Order?.StoreId,
                                     StoreName = o.FirstOrDefault().Order?.Store?.Name,
                                     SoldAmount = o.Sum(x => (x.Order.OrderType == OrderType.Order || x.Order.OrderType == OrderType.Sale) ? x.Amount : 0),
                                     ReturnedAmount = o.Sum(x => (x.Order.OrderType == OrderType.ReturnSupplier) ? x.Amount : 0),
                                     Discount = o.Sum(x => x.DiscountAmount),
                                     Revenue = o.Sum(x => (x.Order.OrderType == OrderType.Order || x.Order.OrderType == OrderType.Sale) ? x.Price : 0),
                                     MoneyReturned = o.Sum(x => (x.Order.OrderType == OrderType.ReturnSupplier) ? x.Price : 0),
                                     Capital = o.Sum(x => x.Product.Cost),
                                     Interest = o.Sum(x => x.Product.Price),
                                 }).ToList();
            return data;
        }

        private async Task<List<ProfitByTime>> GetListByTime(List<Order> profits)
        {
            var profitIds = profits.Select(o => o.Id).ToList();
            var orderItems = await _unitOfWork.OrderItemRepository
                                        .FindByCondition(oi => profitIds.Contains(oi.OrderId))
                                        .Include(o => o.Product)
                                        .Include(o => o.Order)
                                        .AsNoTracking()
                                        .ToListAsync();
            var data = orderItems.GroupBy(o => o.CreatedDate.Value.ToString("MM/dd/yyyy"))
                                 .Select(o => new ProfitByTime
                                 {
                                     Id = o.FirstOrDefault().Id,
                                     Time = o.FirstOrDefault().CreatedDate,
                                     SoldAmount = o.Sum(x => (x.Order.OrderType == OrderType.Order || x.Order.OrderType == OrderType.Sale) ? x.Amount : 0),
                                     ReturnedAmount = o.Sum(x => (x.Order.OrderType == OrderType.ReturnSupplier) ? x.Amount : 0),
                                     Discount = o.Sum(x => x.DiscountAmount),
                                     Revenue = o.Sum(x => (x.Order.OrderType == OrderType.Order || x.Order.OrderType == OrderType.Sale) ? x.Price : 0),
                                     MoneyReturned = o.Sum(x => (x.Order.OrderType == OrderType.ReturnSupplier) ? x.Price : 0),
                                     Capital = o.Sum(x => x.Product.Cost),
                                     Interest = o.Sum(x => x.Product.Price),
                                 }).ToList();
            return data;
        }
    }
}
