USE [senganiparivar]
GO

/****** Object:  Table [dbo].[FamilyPerson]    Script Date: 9/15/2022 11:54:26 AM ******/

 CREATE TABLE dbo.MarriedDaughterDetail
(  
	[MarriedDaughterDetailID] [int] IDENTITY(1,1) NOT NULL,
	[FamilyID] [int] not null,
	[FirstName]	varchar(500) NOT NULL,
	[HusbandName] varchar(500) NOT NULL,
	[FatherInLawName] varchar(500) NOT NULL,
	[Surname] varchar(500) NOT NULL,
	[Village] varchar(500) NOT NULL,
	[Birthdate] date NULL,	
	[Mobile] int NOT NULL,	
        [ModifiedByID] [int]  NULL,
	[ModifiedDate] datetime NOT NULL,
	CONSTRAINT PK_MarriedDaughterDetail_MarriedDaughterDetailID PRIMARY KEY (MarriedDaughterDetailID),
	CONSTRAINT FK_MarriedDaughterDetail_FamilyID FOREIGN KEY (FamilyID) REFERENCES Family(FamilyID)    
	);
GO



