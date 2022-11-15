USE [senganiparivar]
GO

/****** Object:  Table [dbo].[FamilyPerson]    Script Date: 9/15/2022 11:54:26 AM ******/

 CREATE TABLE dbo.Relation
(  
	[RelationID] [int] IDENTITY(1,1) NOT NULL,
	[RelationName] NVARCHAR(max) NOT NULL,	
	[UseType] int,
	CONSTRAINT PK_Relation_RelationID PRIMARY KEY (RelationID)	  
	);
GO



GO

INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'પોતે',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'માતા',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'પિતા',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'દીકરી',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'દિકરો',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'પતિ',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'પત્ની',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'ભાઈ',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'બહેન',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'દાદા',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'દાદી',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'કાકા',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'કાકી',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'મોટા બાપા',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'મોટી મા',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'ભત્રીજો',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'ભત્રીજી',1)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'અન્ય',1)

INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'દીકરી',2)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'જમાઈ',2)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'ફઈ',2)
INSERT [dbo].[Relation] ([RelationName],[UseType]) VALUES (N'ફુઆ',2)

GO