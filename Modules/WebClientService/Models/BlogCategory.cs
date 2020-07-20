using System;
using System.Collections.Generic;
using System.Text;

namespace WebClientService.Models
{
   public class BlogCategory
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public int TenantId { get; set; }
    }
}
