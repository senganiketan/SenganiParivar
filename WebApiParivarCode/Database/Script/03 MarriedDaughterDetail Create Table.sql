USE [senganiparivar]
GO

/****** Object:  Table [dbo].[FamilyPerson]    Script Date: 9/15/2022 11:54:26 AM ******/

 CREATE TABLE dbo.MarriedDaughterDetail
(  
	[MarriedDaughterDetailID] [int] IDENTITY(1,1) NOT NULL,
	[FamilyID] [int] not null,
	[FirstName]	Nvarchar(max) NOT NULL,
	[HusbandName] Nvarchar(max) NOT NULL,
	[FatherInLawName] Nvarchar(max) NOT NULL,
	[Surname] Nvarchar(max) NOT NULL,
	[Relation] Nvarchar(max) NOT NULL,
	[Village] Nvarchar(max) NOT NULL,
	[Birthdate] date NULL,	
	[Mobile] int NOT NULL,	
    [ModifiedByID] [int]  NULL,
	[ModifiedDate] datetime NOT NULL default getdate(),
	CONSTRAINT PK_MarriedDaughterDetail_MarriedDaughterDetailID PRIMARY KEY (MarriedDaughterDetailID),
	CONSTRAINT FK_MarriedDaughterDetail_FamilyID FOREIGN KEY (FamilyID) REFERENCES Family(FamilyID)    
	);
GO



