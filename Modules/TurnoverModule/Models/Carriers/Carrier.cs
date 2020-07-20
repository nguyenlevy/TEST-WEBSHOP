using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace TurnoverModule.Models.Carriers
{
    [Table("Carrier")]
    public class Carrier
    {
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(400)")]
        public string Name { get; set; }
        public string Description { get; set; }
        public int DisplayOrder { get; set; }
        public int TenantId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
