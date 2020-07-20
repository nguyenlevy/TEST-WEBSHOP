using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebClient.Models
{
    [Table("Product_Category_Mapping")]
    public class ProductCategory
    {
        public int Id { get; set; }
        public int? ProductId { get; set; }
        public Product Product { get; set; }
        public int? CategoryId { get; set; }
        public Category Category { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
