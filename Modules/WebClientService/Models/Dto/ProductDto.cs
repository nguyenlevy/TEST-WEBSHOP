using System.Collections.Generic;

namespace WebClient.Models.Dto
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public decimal OldPrice { get; set; }
        public decimal Cost { get; set; }
        public string ProductCode { get; set; }
        public string Image { get; set; }
        public int Amount { get; set; }
        public bool NewProduct { get; set; }
        public bool SaleProduct { get; set; }
        public bool SellingProduct { get; set; }
    }
}
