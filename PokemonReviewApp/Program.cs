/******************************************
* Service Configuration
******************************************/
using API.Entities.CountryEntity.repository;
using API.Entities.OwnerEntity.repository;
using API.Entities.PokemonEntity.repository;
using API.Entities.ReviewEntity.repository;
using API.Entities.ReviewerEntity.repository;
using API.Models.CategoryEntity.repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using PokemonReviewApp;
using PokemonReviewApp.Authentication.Entity;
using PokemonReviewApp.Authentication.Interfaces;
using PokemonReviewApp.Data;
using System.Text;
using System.Text.Json.Serialization;


// Creating a new web application builder
var builder = WebApplication.CreateBuilder(args);

/******************************************
* Controllers Configuration
******************************************/
// Add controller services to the container
builder.Services.AddControllers();

/******************************************
* JSON Serialization Configuration
******************************************/
// Configure JSON serialization options to ignore object cycles
builder.Services
    .AddControllers()
    .AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

/******************************************
* AutoMapper Configuration
******************************************/
// Add AutoMapper for object mapping
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

/******************************************
* Repository Configuration
******************************************/
// Add scoped instances of repository interfaces
builder.Services.AddScoped<IPokemonRepository, PokemonRepository>();
builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<ICountryRepository, CountryRepository>();
builder.Services.AddScoped<IOwnerRepository, OwnerRepository>();
builder.Services.AddScoped<IReviewRepository, ReviewRepository>();
builder.Services.AddScoped<IReviewerRepository, ReviewerRepository>();

/******************************************
* Swagger Configuration
******************************************/
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

/******************************************
* Token Service Configuration
******************************************/
builder.Services.AddScoped<ITokenService, TokenService>(); // Add token service for authentication

/******************************************
* Authentication Configuration
******************************************/
// Add JWT Bearer authentication scheme
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["TokenKey"])),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

/**************************************
 * CORS Configuration
 **************************************/

// Enable CORS for specified origins / all origins
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy =>
    {
        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200");
        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200");
    });
});

/******************************************
* Database Context Configuration
******************************************/
builder.Services.AddDbContext<DataContext>(options =>
{
    // Add DbContext with SQL Server connection
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});


// Build the application
var app = builder.Build();


/******************************************
* Data Seeding
******************************************/
// Check if "seeddata" argument is passed during runtime
if (args.Length == 1 && args[0].ToLower() == "seeddata")
    SeedData(app);

// Method for seeding data into the database
void SeedData(IHost app)
{
    var scopedFactory = app.Services.GetService<IServiceScopeFactory>();

    using (var scope = scopedFactory.CreateScope())
    {
        var service = scope.ServiceProvider.GetService<Seed>();
        service.SeedDataContext();
    }
}

/******************************************
* HTTP Request Pipeline Configuration
******************************************/
// Configure the HTTP request pipeline.

// Check if the environment is set to development
if (app.Environment.IsDevelopment())
{
    // Enable Swagger and Swagger UI
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Use the CORS policy defined earlier
app.UseCors("CorsPolicy"); 

// Redirect HTTP requests to HTTPS
app.UseHttpsRedirection();

// Enable authentication middleware
app.UseAuthentication();

// Enable authorization middleware
app.UseAuthorization();

// Map controllers
app.MapControllers();

// Run the application
app.Run();
