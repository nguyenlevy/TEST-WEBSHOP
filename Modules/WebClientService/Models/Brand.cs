using System;
using System.Collections.Generic;
using System.Text;

namespace WebClientService.Models
{
   public class Brand
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public int TenantId { get; set; }
        public string Name { get; set; }
    }
}
