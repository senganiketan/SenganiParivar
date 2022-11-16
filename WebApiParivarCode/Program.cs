using Microsoft.EntityFrameworkCore;
using WebApiParivarCode.Model;
using WebApiParivarCode.Repository;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDbContext>(options => 
    options.UseSqlServer(builder.Configuration.GetConnectionString("ConStr"))
);

builder.Services.AddCors(options => options.AddPolicy(name: "FamilyOrigins",
    policy =>
    {
        policy.WithOrigins("http://localhost:44489", "https://localhost:44489").AllowAnyMethod().AllowAnyHeader();
    }));


builder.Services.AddScoped<IFamilyRepository, FamilyRepository>();
builder.Services.AddScoped<IFamilyMemberRepository, FamilyMemberRepository>();

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseCors("FamilyOrigins");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
