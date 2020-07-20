using System;
using System.Collections.Generic;
using System.Text;

namespace WebClientService.Models.Dto
{
   public class ProductMapping
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
        public List<Brand> Brands { get; set; }
        public List<AttributeList> Attributes { get; set; }
        public string ProductManufacturer { get; set; }
    }
}
