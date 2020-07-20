using TurnoverModule.Models.Carriers;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace TurnoverModule.Models.Shipments
{
    [Table("Shipment")]
    public class Shipment
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public DateTime? ShippedDateUtc { get; set; }
        public DateTime? DeliveryDateUtc { get; set; }
        public string Note { get; set; }
        public int TenantId { get; set; }
        public string Shipper { get; set; }
        public int CarrierId { get; set; }
        public Carrier Carrier { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
