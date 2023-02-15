USE [senganiparivar]
GO

/****** Object:  Table [dbo].[FamilyPerson]    Script Date: 9/15/2022 11:54:26 AM ******/

 CREATE TABLE dbo.DaughterDetail
(  
	[DaughterDetailID] [int] IDENTITY(1,1) NOT NULL,
	[FamilyID] [int] not null,
	[FirstName]	Nvarchar(max) NOT NULL,
	[HusbandName] Nvarchar(max) NULL,
	[FatherInLawName] Nvarchar(max) NULL,
	[Surname] Nvarchar(max) NOT NULL,
	[RelationID] int NULL,
	[Village] Nvarchar(max) NULL,
	[Age] int NULL,	
	[Mobile] numeric(10, 0) NULL,	
	[Active] bit default 1,
	[AttendingProgram] bit default 0,
	[Alive] int default 3,
	[GiftRecieved] bit default 0,
    [ModifiedByID] numeric(10, 0)  NULL,
	[ModifiedDate] datetime NOT NULL default getdate(),
	CONSTRAINT PK_DaughterDetail_DaughterDetailID PRIMARY KEY (DaughterDetailID),
	CONSTRAINT FK_DaughterDetail_FamilyID FOREIGN KEY (FamilyID) REFERENCES Family(FamilyID),
	CONSTRAINT FK_DaughterDetail_RelationID FOREIGN KEY (RelationID) REFERENCES Relation(RelationID)    
	);
GO
--ALTER TABLE dbo.DaughterDetail ADD Alive int default 3;
--update dbo.DaughterDetail set Alive=3


