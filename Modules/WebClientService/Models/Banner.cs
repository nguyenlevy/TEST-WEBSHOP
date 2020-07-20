using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebClient.Models
{
    [Table("Banner")]
    public class Banner
    {
        public int Id { get; set; }
        [Column("Image", TypeName = "nvarchar(500)")]
        public string Image { get; set; }
        public int TenantId { get; set; }
    }
}
