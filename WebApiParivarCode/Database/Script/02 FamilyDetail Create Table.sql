USE [senganiparivar]
GO

/****** Object:  Table [dbo].[FamilyPerson]    Script Date: 9/15/2022 11:54:26 AM ******/

 CREATE TABLE dbo.FamilyMember
(  
	[FamilyMemberID] [int] IDENTITY(1,1) NOT NULL,
	[FamilyID] [int] not null,
	[FirstName]	Nvarchar(max) NOT NULL,
	[FatherHusbandName] Nvarchar(max) NOT NULL,
	[Relation] Nvarchar(max) NOT NULL,
	[Gender] Nvarchar(max) NOT NULL,
	[Birthdate] date NULL,
	[MaritalStatus] Nvarchar(max)  NULL,
	[Education] Nvarchar(max)  NULL,
	[Business] Nvarchar(max)  NULL,
	[Mobile] int NOT NULL,	
    [ModifiedByID] [int]  NULL,
	[ModifiedDate] datetime NOT NULL default getdate(),	
	CONSTRAINT PK_FamilyMember_FamilyMemberID PRIMARY KEY (FamilyMemberID),
	CONSTRAINT FK_FamilyMember_FamilyID FOREIGN KEY (FamilyID) REFERENCES Family(FamilyID)    
	
) 
	

GO


