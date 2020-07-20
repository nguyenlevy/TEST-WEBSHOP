using Authentication.Core;
using Authentication.Helper;
using AutoMapper;
using Common.Core;
using Core.Core.Helper;
using CustomerModule.Core;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using OrderModule.Core;
using ProductModule.Core;

namespace Sales
{
    public class Startup
    {
        private const string DefaultCorsPolicyName = "AllowOrigin";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(DefaultCorsPolicyName, options =>
                {
                    options
                        .WithOrigins(Configuration["App:CorsOrigins"])
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            SalesConfiguration.SetSalesConfiguration(Configuration);

            // auto mapping
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new AutoMappingCommon());
                mc.AddProfile(new AutoMappingAuthentication());
                mc.AddProfile(new AutoMappingProduct());
                mc.AddProfile(new AutoMappingCustomer());
                mc.AddProfile(new AutoMappingOrder());
            });
            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddFeatureServiceAuthentication();
            services.AddFeatureServiceCommon();
            services.AddFeatureServiceCustomer();
            services.AddFeatureServiceOrder();
            services.AddFeatureServiceProduct();
            services.AddControllers();

            // configure basic authentication
            services.AddAuthentication("BasicAuthentication")
                .AddScheme<AuthenticationSchemeOptions, BasicAuthenticationHandler>("BasicAuthentication", null);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(options =>
            {
                options
                .WithOrigins(Configuration["App:CorsOrigins"])
                .AllowAnyHeader()
                .AllowAnyMethod();
            });

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.Options.StartupTimeout = new System.TimeSpan(0, 0, 100);
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
