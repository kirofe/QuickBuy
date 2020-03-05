using QuickBuy.Dominio.Contratos;
using QuickBuy.Repositorio.Contexto;
using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorios
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {
        protected readonly QuickBuyContexto quickBuyContexto;
        public BaseRepositorio(QuickBuyContexto quickBuyContexto)
        {
            this.quickBuyContexto = quickBuyContexto;
        }

        public void Adicionar(TEntity entity)
        {
            this.quickBuyContexto.Set<TEntity>().Add(entity);
            this.quickBuyContexto.SaveChanges();
        }

        public void Atualizar(TEntity entity)
        {
            this.quickBuyContexto.Set<TEntity>().Update(entity);
            this.quickBuyContexto.SaveChanges();
        }

        public TEntity ObterPorId(int id)
        {
            return this.quickBuyContexto.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> ObterTodos()
        {            
            return this.quickBuyContexto.Set<TEntity>().ToList();
        }

        public void Remover(TEntity entity)
        {
            this.quickBuyContexto.Remove(entity);
            this.quickBuyContexto.SaveChanges();
        }

        public void Dispose()
        {
            this.quickBuyContexto.Dispose();
        }
    }
}
