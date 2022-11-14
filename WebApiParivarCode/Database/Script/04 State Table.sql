USE [senganiparivar]
GO
/****** Object:  Table [dbo].[State]    Script Date: 9/16/2022 6:14:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[State]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[State](
	[StateID] [int] NOT NULL,
	[StateName] [varchar](150) NOT NULL,
 CONSTRAINT [PK_State] PRIMARY KEY CLUSTERED 
(
	[StateID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
END
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (1, N'Andhra Pradesh')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (2, N'Andaman and Nicobar Islands')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (3, N'Arunachal Pradesh')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (4, N'Assam')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (5, N'Bihar')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (6, N'Chandigarh')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (7, N'Chhattisgarh')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (8, N'Dadar and Nagar Haveli')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (9, N'Daman and Diu')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (10, N'Delhi')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (11, N'Lakshadweep')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (12, N'Puducherry')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (13, N'Goa')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (14, N'Gujarat')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (15, N'Haryana')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (16, N'Himachal Pradesh')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (17, N'Jammu and Kashmir')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (18, N'Jharkhand')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (19, N'Karnataka')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (20, N'Kerala')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (21, N'Madhya Pradesh')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (22, N'Maharashtra')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (23, N'Manipur')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (24, N'Meghalaya')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (25, N'Mizoram')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (26, N'Nagaland')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (27, N'Odisha')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (28, N'Punjab')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (29, N'Rajasthan')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (30, N'Sikkim')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (31, N'Tamil Nadu')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (32, N'Telangana')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (33, N'Tripura')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (34, N'Uttar Pradesh')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (35, N'Uttarakhand')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (36, N'West Bengal')
GO
INSERT [dbo].[State] ([StateID], [StateName]) VALUES (37, N'Other')
GO
