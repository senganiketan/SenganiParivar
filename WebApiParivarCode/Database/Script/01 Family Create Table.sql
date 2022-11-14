USE [senganiparivar]
GO

/****** Object:  Table [dbo].[FamilyPerson]    Script Date: 9/15/2022 11:54:26 AM ******/

 CREATE TABLE dbo.Family
(  
	[FamilyID] [int] IDENTITY(1,1) NOT NULL,	
	[OriginalVillage] varchar(500)  NULL,
	[OriginalDistrict] varchar(500)  NULL,
	[CurrentAddress] VARCHAR(MAX) NULL,
	[CurrentVillage] varchar(500)  NULL,
	[CurrentDistrict] varchar(500)  NULL,
	[CurrentState] varchar(500)  NULL,		
	[CurrentPincode] int null,
        [ModifiedByID] [int]  NULL,
	[ModifiedDate] datetime NOT NULL
	CONSTRAINT [PKCX_Family_FamilyID(K)] PRIMARY KEY CLUSTERED 
	(
		[FamilyID] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 90, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
	) ON [PRIMARY]


GO


