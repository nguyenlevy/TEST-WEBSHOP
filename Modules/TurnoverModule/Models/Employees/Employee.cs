using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace TurnoverModule.Models.Employees
{
    [Table("Employee")]
    public class Employee
    {
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        public int TenantId { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public long? UserModifiedId { get; set; }
    }
}
