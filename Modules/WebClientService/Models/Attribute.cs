using System;
using System.Collections.Generic;
using System.Text;

namespace WebClientService.Models
{
    public class Attribute
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public int TenantId { get; set; }

    }



    public class AttributeList
    {
        public int AttributeId { get; set; }
        public string AttributeLabel { get; set; }
        public int TenantId { get; set; }
        public List<AttributeValueData> listAttributeValue { get; set; }
    }


    public class AttributeValueData
    {
        public int AttributeValueId { get; set; }
        public int AttributeId { get; set; }
        public string AttributeLabel { get; set; }
        public int TenantId { get; set; }


    }
}
