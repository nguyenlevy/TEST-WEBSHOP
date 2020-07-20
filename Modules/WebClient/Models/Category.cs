using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebClient.Models
{
    [Table("Category")]
    public class Category
    {
        public int Id { get; set; }
        [Column("Name",TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        public int? ParentCategoryId { get; set; }
        public int TenantId { get; set; }
        [Column("Note", TypeName = "nvarchar(200)")]
        public string Note { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
