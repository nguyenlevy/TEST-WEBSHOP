using Common.Core;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Authentication.Core
{
    public class GenericRepository<T> where T : class
    {
        private readonly CommonDbContext _commonDbContext;
        private readonly DbSet<T> dbSet;

        public GenericRepository(CommonDbContext commonDbContext)
        {
            _commonDbContext = commonDbContext;
            dbSet = _commonDbContext.Set<T>();
        }

        public void Create(T entity)
        {
            dbSet.Add(entity);
        }

        public void Delete(T entity)
        {
            dbSet.Remove(entity);
        }

        public IQueryable<T> FindAll()
        {
            return dbSet;
        }

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
        {
            return dbSet
            .Where(expression);
        }

        public void Update(T entity)
        {
            dbSet.Update(entity);
        }

        public void AddRange(IEnumerable<T> entities)
        {
            dbSet.AddRange(entities);
        }

        public void RemoveRange(IEnumerable<T> entities)
        {
            dbSet.RemoveRange(entities);
        }

        public void UpdateRange(IEnumerable<T> entities)
        {
            dbSet.UpdateRange(entities);
        }
    }
}
