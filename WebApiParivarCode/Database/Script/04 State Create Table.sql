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
INSERT [dbo].[State] ([StateName]) VALUES (N'Gujarat')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Maharashtra')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Andhra Pradesh')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Andaman and Nicobar Islands')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Arunachal Pradesh')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Assam')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Bihar')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Chandigarh')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Chhattisgarh')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Dadar and Nagar Haveli')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Daman and Diu')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Delhi')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Lakshadweep')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Puducherry')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Goa')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Haryana')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Himachal Pradesh')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Jammu and Kashmir')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Jharkhand')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Karnataka')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Kerala')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Madhya Pradesh')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Manipur')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Meghalaya')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Mizoram')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Nagaland')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Odisha')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Punjab')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Rajasthan')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Sikkim')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Tamil Nadu')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Telangana')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Tripura')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Uttar Pradesh')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Uttarakhand')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'West Bengal')
GO
INSERT [dbo].[State] ([StateName]) VALUES (N'Other')
GO
