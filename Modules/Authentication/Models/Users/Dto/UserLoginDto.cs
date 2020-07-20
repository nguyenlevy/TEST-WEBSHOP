using System;

namespace Authentication.Models.Users.Dto
{
    public class UserLoginDto
    {
        public long Id { get; set; }
        public string Token { get; set; }
        public long UserId { get; set; }
        public int TenantId { get; set; }
        public DateTime ExpireDate { get; set; }
        public int? StoreId { get; set; }
    }
}
