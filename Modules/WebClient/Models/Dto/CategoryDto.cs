using System.Collections.Generic;

namespace WebClient.Models.Dto
{
    public class CategoryDto
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public int? ParentCategoryId { get; set; }
        public string ParentCategoryName { get; set; }
        public string Note { get; set; }
    }

    //public class CategoryListDto
    //{
    //    public int? Id { get; set; }
    //    public string Name { get; set; }
    //    public int? ParentCategoryId { get; set; }
    //    public string ParentCategoryName { get; set; }
    //    public List<CategoryDto> lstCategory = new List<CategoryDto>();
    //}

}
