using TurnoverModule.Models.Categories;
using System.ComponentModel.DataAnnotations.Schema;

namespace TurnoverModule.Models.Products
{
    [Table("Product_Category_Mapping")]
    public class ProductCategory
    {
        public int Id { get; set; }
        public int? ProductId { get; set; }
        public Product Product { get; set; }
        public int? CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
