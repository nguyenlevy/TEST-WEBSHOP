using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrderModule.Models.Stores
{
    [Table("Store")]
    public class Store
    {
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        public int DisplayOrder { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string CompanyName { get; set; }
        [Column(TypeName = "nvarchar(150)")]
        public string CompanyAddress { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string CompanyPhoneNumber { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string CompanyVat { get; set; }
        public int? TenantId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
