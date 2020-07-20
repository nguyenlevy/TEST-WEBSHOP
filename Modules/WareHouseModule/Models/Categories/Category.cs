using WarehousingModule.Models.Products;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace WarehousingModule.Models.Categories
{
    [Table("Category")]
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int DisplayOrder { get; set; }
        public int? ParentCategoryId { get; set; }
        public int TenantId { get; set; }
        public ICollection<ProductCategory> ProductCategories { get; set; }

        public Category()
        {
            DisplayOrder = 1;
        }
    }
}
