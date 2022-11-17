USE [senganiparivar]
GO

/****** Object:  Table [dbo].[FamilyPerson]    Script Date: 9/15/2022 11:54:26 AM ******/

 CREATE TABLE dbo.Family
(  
	[FamilyID] [int] IDENTITY(1,1) NOT NULL,	
	[OriginalVillage] Nvarchar(max)  NULL,
	[OriginalDistrict] Nvarchar(max)  NULL,
	[PostalAddressName] Nvarchar(max) NULL,
	[CurrentAddress] Nvarchar(max) NULL,
	[CurrentVillage] Nvarchar(max) NULL,
	[CurrentDistrict] Nvarchar(max)  NULL,
	[CurrentState] Nvarchar(max)  NULL,		
	[CurrentPincode] int NULL,
	[ResidentialFacility] bit default 0,
	[Active] bit default 1,
    [ModifiedByID] int  NULL,
	[ModifiedDate] datetime NOT NULL default getdate()
	CONSTRAINT [PKCX_Family_FamilyID(K)] PRIMARY KEY CLUSTERED 
	(
		[FamilyID] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
	) ON [PRIMARY]


GO


