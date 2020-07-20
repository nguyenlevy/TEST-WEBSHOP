using System.Collections.Generic;

namespace WebClient.Models.Dto
{
    public enum TypeSearchProduct
    {
        ByCategory = 1,
        ByKeyword = 2,
        ByFlashSale = 3,
        ByNewest = 4,
        ByBestSeller = 5,
        ByFilter = 6,
		ById = 7,
        ByNewProduct=8,
        BySaleProduct=9,
        BySellingProduct=10
	}
    public enum TypeSearchCategory
    {
        ByMenuCategory = 1,
        //ByParentCategory = 3,
        ByGetOneId = 2

    }
    public enum TypeSearchBlog
    {
        ByGetAllBlog = 1,
       
        ByGetOneId = 2,
        ByGetCategory = 3,
        ByGetBlogByCategory = 4


    }

    public class ProductSearchModel
    {
		public int ProductID { get; set; }
		public int TypeSearch { get; set; }
        public int CategoryID { get; set; }
        public string Keyword { get; set; }
        public double PriceFrom { get; set; }
        public double PriceTo { get; set; }
        public string? BrandIDs { get; set; }
        public string? AttributeIDs { get; set; }
    }

    public class CategorySearchModel
    {
        public int TypeSearch { get; set; }
        public int CategoryID { get; set; }
    }
    public class BlogSearchModel
    {
        public int TypeSearch { get; set; }
        public int CategoryID { get; set; }
        public int Id { get; set; }
    }
}
