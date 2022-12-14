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

builder.Services.AddCors(options => options.AddPolicy(name: "FamilyOrigins", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));

//builder.Services.AddCors(options => options.AddPolicy(name: "FamilyOrigins",
//    policy =>
//    {
//       // policy.WithOrigins("http://webapi.hirjidada.com", "https://webapi.hirjidada.com").AllowAnyMethod().AllowAnyHeader();
//        policy.WithOrigins("http://webapi.hirjidada.com", "https://webapi.hirjidada.com").AllowAnyMethod().AllowAnyHeader();
//    }));


builder.Services.AddScoped<IFamilyRepository, FamilyRepository>();
builder.Services.AddScoped<IFamilyMemberRepository, FamilyMemberRepository>();
builder.Services.AddScoped<IDaughterDetailRepository, DaughterDetailRepository>();
builder.Services.AddScoped<IRelationRepository, RelationRepository>();
builder.Services.AddScoped<IUserLoginRepository, UserLoginRepository>();

var app = builder.Build();
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}
app.UseSwagger();
app.UseSwaggerUI();


app.UseCors("FamilyOrigins");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();


