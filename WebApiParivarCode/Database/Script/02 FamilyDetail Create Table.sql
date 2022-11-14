USE [senganiparivar]
GO

/****** Object:  Table [dbo].[FamilyPerson]    Script Date: 9/15/2022 11:54:26 AM ******/

 CREATE TABLE dbo.FamilyDetail
(  
	[FamilyDetailID] [int] IDENTITY(1,1) NOT NULL,
	[FamilyID] [int] not null,
	[FirstName]	varchar(500) NOT NULL,
	[FatherHusbandName] varchar(500) NOT NULL,
	[Relation] varchar(500) NOT NULL,
	[Gender] varchar(500) NOT NULL,
	[Birthdate] date NULL,
	[MaritalStatus] varchar(50)  NULL,
	[Education] varchar(1000)  NULL,
	[Business] varchar(1000)  NULL,
	[Mobile] int NOT NULL,	
        [ModifiedByID] [int]  NULL,
	[ModifiedDate] datetime NOT NULL,	
	CONSTRAINT PK_FamilyDetail_FamilyDetailID PRIMARY KEY (FamilyDetailID),
	CONSTRAINT FK_FamilyDetail_FamilyID FOREIGN KEY (FamilyID) REFERENCES Family(FamilyID)    
	
) 


GO


