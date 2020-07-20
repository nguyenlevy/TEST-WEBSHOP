using AutoMapper;
using BalanceModule.Core;
using BalanceModule.Models.Balances;
using BalanceModule.Models.Balances.Dto;
using BalanceModule.Models.CostTypes.Dto;
using BalanceModule.Models.Orders;
using Core.Core;
using Core.Core.Helper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BalanceModule.Services.Balances
{
    public class BalanceService : IBalanceService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWorkBalance _unitOfWork;
        public BalanceService(
            IMapper mapper,
            IUnitOfWorkBalance unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        public async Task<List<BalanceDto>> GetBalances(BalanceFilter balanceFilter)
        {
            switch (balanceFilter.BalanceType)
            {
                case BalanceType.Receipt:
                    return await GetListReceipts(balanceFilter.TenantId);
                case BalanceType.Expense:
                    return await GetListExpenses(balanceFilter.TenantId);
                case BalanceType.CashBook:
                    var data = await GetListReceipts(balanceFilter.TenantId);
                    data.AddRange(await GetListExpenses(balanceFilter.TenantId));
                    return data;
                default:
                    return new List<BalanceDto>();
            }
        }

        private async Task<List<BalanceDto>> GetListReceipts(int tenantId)
        {
            var receipts = new List<BalanceDto>();
            var orders = await _unitOfWork.OrderRepository.FindByCondition(o => (o.OrderType == OrderType.Order || o.OrderType == OrderType.Sale) && o.TenantId == tenantId)
                                                    .Include(o => o.PaymentMethod)
                                                    .Include(o => o.Store)
                                                    .Include(o => o.Seller)
                                                    .AsNoTracking()
                                                    .ToListAsync();

            var orderIds = orders.Select(o => o.Id).ToList();
            if (orderIds.Any())
            {
                var orderItems = await _unitOfWork.OrderItemRepository
                                        .FindByCondition(oi => orderIds.Contains(oi.OrderId))
                                        .AsNoTracking()
                                        .ToListAsync();
                var orderNotes = await _unitOfWork.OrderNoteRepository
                                        .FindByCondition(on => orderIds.Contains(on.OrderId))
                                        .AsNoTracking()
                                        .ToListAsync();
                foreach (var order in orders)
                {
                    order.OrderItems = orderItems.Where(oi => oi.OrderId == order.Id).ToList();
                    order.OrderNote = orderNotes.FirstOrDefault(on => on.OrderId == order.Id);
                }
            }
            receipts = orders.Select(o => new BalanceDto
            {
                PaymentMethodName = o.PaymentMethod?.Name,
                StoreName = o.Store?.Name,
                BalanceDate = o.SaleDate?.ToString(),
                Price = o.OrderItems.Sum(o => o.Price),
                Note = o.OrderNote?.Note,
                Code = o.OrderCode,
                SellerName = o.Seller?.Name,
                Id = o.Id
            }
            ).ToList();
            var balances = await _unitOfWork.BalanceRepository.FindByCondition(b => b.BalanceType == BalanceType.Receipt && b.TenantId == tenantId)
                                                    .Include(b => b.PaymentMethod)
                                                    .Include(b => b.Store)
                                                    .Include(b => b.Employee)
                                                    .Include(b => b.BalanceCategory)
                                                    .AsNoTracking()
                                                    .ToListAsync();
            receipts.AddRange(balances.Select(o => new BalanceDto
            {
                BalanceType = o.BalanceType,
                PaymentMethodName = o.PaymentMethod?.Name,
                StoreName = o.Store?.Name,
                BalanceDate = o.BalanceDate?.ToString(),
                Price = o.Price,
                Note = o.Note,
                Code = o.Code,
                SellerName = o.Employee?.Name,
                BalanceCategoryName = o.BalanceCategory?.Name,
                Id = o.Id
            }
            ));
            return receipts;
        }

        private async Task<List<BalanceDto>> GetListExpenses(int tenantId)
        {
            var expenses = new List<BalanceDto>();
            var orders = await _unitOfWork.OrderRepository.FindByCondition(o => (o.OrderType == OrderType.Warehousing) && o.TenantId == tenantId)
                                                    .Include(o => o.PaymentMethod)
                                                    .Include(o => o.Store)
                                                    .Include(o => o.Seller)
                                                    .AsNoTracking()
                                                    .ToListAsync();

            var orderIds = orders.Select(o => o.Id).ToList();
            if (orderIds.Any())
            {
                var orderItems = await _unitOfWork.OrderItemRepository
                                        .FindByCondition(oi => orderIds.Contains(oi.OrderId))
                                        .AsNoTracking()
                                        .ToListAsync();
                var orderNotes = await _unitOfWork.OrderNoteRepository
                                        .FindByCondition(on => orderIds.Contains(on.OrderId))
                                        .AsNoTracking()
                                        .ToListAsync();
                foreach (var order in orders)
                {
                    order.OrderItems = orderItems.Where(oi => oi.OrderId == order.Id).ToList();
                    order.OrderNote = orderNotes.FirstOrDefault(on => on.OrderId == order.Id);
                }
            }
            expenses = orders.Select(o => new BalanceDto
            {
                PaymentMethodName = o.PaymentMethod?.Name,
                StoreName = o.Store?.Name,
                BalanceDate = o.SaleDate.ToString(),
                Price = o.OrderItems.Sum(o => o.Price),
                Note = o.OrderNote?.Note,
                Code = o.OrderCode,
                SellerName = o.Seller?.Name,
                Id = o.Id
            }
            ).ToList();
            var balances = await _unitOfWork.BalanceRepository.FindByCondition(b => b.BalanceType == BalanceType.Expense && b.TenantId == tenantId)
                                                    .Include(b => b.PaymentMethod)
                                                    .Include(b => b.Store)
                                                    .Include(b => b.Employee)
                                                    .Include(b => b.BalanceCategory)
                                                    .AsNoTracking()
                                                    .ToListAsync();
            expenses.AddRange(balances.Select(o => new BalanceDto
            {
                BalanceType = o.BalanceType,
                PaymentMethodName = o.PaymentMethod?.Name,
                StoreName = o.Store?.Name,
                BalanceDate = o.BalanceDate.ToString(),
                Price = o.Price,
                Note = o.Note,
                Code = o.Code,
                SellerName = o.Employee?.Name,
                BalanceCategoryName = o.BalanceCategory?.Name,
                Id = o.Id
            }
            ));
            var costs = await _unitOfWork.CostRepository.FindByCondition(b => b.TenantId == tenantId)
                                                        .AsNoTracking()
                                                        .ToListAsync();
            expenses.AddRange(costs.Select(o => new BalanceDto
            {
                PaymentMethodName = o.PaymentMethod?.Name,
                StoreName = o.Store?.Name,
                BalanceDate = o.CostDate.ToString(),
                Price = o.Price,
                Note = o.Note,
                Code = o.Code,
                SellerName = o.Employee?.Name,
                Id = o.Id
            }
            ));
            return expenses;
        }

        public async Task<OverviewDto> GetOverviews()
        {
            return new OverviewDto();
        }

        public async Task CreateBalance(int? tenantId, long userId, BalanceDto data)
        {
            var balance = _mapper.Map<Balance>(data);
            if (!string.IsNullOrEmpty(data.BalanceDate))
            {
                balance.BalanceDate = Convert.ToDateTime(data.BalanceDate);
            }
            balance.Code = Constants.GenerateCode();
            balance.CreatedDate = DateTime.Now;
            balance.UserModifiedId = userId;
            balance.TenantId = tenantId.Value;
            _unitOfWork.BalanceRepository.Create(balance);
            await _unitOfWork.Commit();
        }

        public async Task<List<BalanceCategoryDto>> GetBalanceCategories(int? tenantId, BalanceType? balanceType)
        {
            var query = _unitOfWork.BalanceCategoryRepository.FindByCondition(b => b.TenantId == tenantId.Value);
            if (balanceType.HasValue)
            {
                query = query.Where(b => b.BalanceType == balanceType.Value);
            }
            var data = await query.AsNoTracking().ToListAsync();
                                                          
            return _mapper.Map<List<BalanceCategoryDto>>(data);
        }

        public async Task<ApiJsonResult> Delete(int id)
        {
            var result = new ApiJsonResult();
            var balance = await _unitOfWork.BalanceRepository.FindByCondition(b => b.Id == id)
                                                               .AsNoTracking().FirstOrDefaultAsync();
            if (balance == null)
            {
                result.Code = CodeModel.Fail;
                result.Message = "Balance is not found";
                return result;
            }
            _unitOfWork.BalanceRepository.Delete(balance);
            await _unitOfWork.Commit();
            return result;
        }
    }
}
