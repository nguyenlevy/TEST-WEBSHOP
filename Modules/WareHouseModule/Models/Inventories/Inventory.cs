using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace WarehousingModule.Models.Inventories
{
    [Table("Inventory")]
    public class Inventory
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int Amount { get; set; }
        public int AmountOfImport { get; set; }
        public int AmountOfExport { get; set; }
        public int TenantId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
