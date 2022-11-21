USE [senganiparivar]
GO

/****** Object:  Table [dbo].[FamilyPerson]    Script Date: 9/15/2022 11:54:26 AM ******/

 CREATE TABLE dbo.FamilyMember
(  
	[FamilyMemberID] [int] IDENTITY(1,1) NOT NULL,
	[FamilyID] [int] not null,
	[FirstName]	Nvarchar(max) NOT NULL,
	[FatherHusbandName] Nvarchar(max) NOT NULL,
	[RelationID] int NULL,
	[Gender] Nvarchar(max) NOT NULL,
	[Birthdate] date NULL,
	[MaritalStatus] Nvarchar(max)  NULL,
	[Education] Nvarchar(max)  NULL,
	[Business] Nvarchar(max)  NULL,
	[Mobile] numeric(10, 0) NOT NULL,	
	[AttendingProgram] bit default 0,
	[Active] bit default 1,
    [ModifiedByID] numeric(10, 0)  NULL,
	[ModifiedDate] datetime NOT NULL default getdate(),	
	CONSTRAINT PK_FamilyMember_FamilyMemberID PRIMARY KEY (FamilyMemberID),
	CONSTRAINT FK_FamilyMember_FamilyID FOREIGN KEY (FamilyID) REFERENCES Family(FamilyID),
	CONSTRAINT FK_FamilyMember_RelationID FOREIGN KEY (RelationID) REFERENCES Relation(RelationID)    
	
) 
	

GO


