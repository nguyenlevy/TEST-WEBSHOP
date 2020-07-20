using Microsoft.Extensions.Configuration;
using System;

namespace Core.Core.Helper
{
    public class SalesConfiguration
    {
        private static IConfiguration _configuration;
        private const string SecurityKeyName = "Authentication:JwtBearer:SecurityKey";
        private const string ExpireTimeKeyName = "Authentication:ExpireTime";
        private const string IssuerKeyName = "Authentication:JwtBearer:Issuer";
        private const string ConnectionStringKeyName = "ConnectionString:DefaultConnection";

        public static void SetSalesConfiguration(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private static string GetConfiguration(string key)
        {
            return _configuration[key];
        }

        public static string GetSecurityKey() { return GetConfiguration(SecurityKeyName); }
        public static int GetExpireTime() { return Int32.Parse(GetConfiguration(ExpireTimeKeyName)); }
        public static string GetIssuer() { return GetConfiguration(IssuerKeyName); }
        public static string GetConnectionString() { return GetConfiguration(ConnectionStringKeyName); }
    }
}
