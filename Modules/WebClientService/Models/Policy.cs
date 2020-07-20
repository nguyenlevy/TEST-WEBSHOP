using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebClient.Models
{
    [Table("Policy")]
    public class Policy
    {
        public int Id { get; set; }
        [Column("Title",TypeName = "nvarchar(50)")]
        public string Title { get; set; }
        [Column("Content", TypeName = "nvarchar(50)")]
        public string Content { get; set; }
        [Column("Image", TypeName = "nvarchar(500)")]
        public string Image { get; set; }
        public int TenantId { get; set; }
    }
}
