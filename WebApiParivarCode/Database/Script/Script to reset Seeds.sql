USE [senganiparivar]
GO
SET IDENTITY_INSERT [dbo].[Family] ON 
GO

INSERT [dbo].[Family] ( [OriginalVillage], [OriginalDistrict], [PostalAddressName], [CurrentAddress], [CurrentVillage], [CurrentDistrict], [CurrentState], [CurrentPincode], [ResidentialFacility], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( N'રાયણ', N'', N'Bhagwanji manji senghani', N'B/3 flat no 503 anita residency katraj kondva road katraj pune 411046', N'Pune', N'Pune', N'Maharashtra', 411046, 0, 1, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:32:18.920' AS DateTime))
GO
INSERT [dbo].[Family] ( [OriginalVillage], [OriginalDistrict], [PostalAddressName], [CurrentAddress], [CurrentVillage], [CurrentDistrict], [CurrentState], [CurrentPincode], [ResidentialFacility], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( N'ગુંદિયાલી', N'', N'Senghani chandrakant ishvarlal', N'Madhav nagar ', N'Bidada', N'Kutchh', N'Gujarat', 370435, 0, 1, CAST(7738440834 AS Numeric(10, 0)), CAST(N'2023-04-18T20:25:19.617' AS DateTime))
GO
INSERT [dbo].[Family] ( [OriginalVillage], [OriginalDistrict], [PostalAddressName], [CurrentAddress], [CurrentVillage], [CurrentDistrict], [CurrentState], [CurrentPincode], [ResidentialFacility], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( N'મેરાઉ', N'', N'SHANTILAL NARAN SENGHANI', N'GURUJI WADI, 
MERAU,
TA.- MANDVI  
PIN 370465', N'MERAU', N'KUTCH', N'Gujarat', 370465, 0, 1, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-19T04:39:12.547' AS DateTime))
GO
INSERT [dbo].[Family] ( [OriginalVillage], [OriginalDistrict], [PostalAddressName], [CurrentAddress], [CurrentVillage], [CurrentDistrict], [CurrentState], [CurrentPincode], [ResidentialFacility], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( N'રાજપર', N'', N'at- rajpar  mandavi kutchh', N'rajpar  mandavi ', N'rajpar', N'kutchh', N'Gujarat', 370445, 0, 1, CAST(7990856678 AS Numeric(10, 0)), CAST(N'2023-04-18T22:26:42.777' AS DateTime))
GO
INSERT [dbo].[Family] ( [OriginalVillage], [OriginalDistrict], [PostalAddressName], [CurrentAddress], [CurrentVillage], [CurrentDistrict], [CurrentState], [CurrentPincode], [ResidentialFacility], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( N'ગઢસીસા', N'', N'Shivaji nagar gadhshisa Ta.mandvi 370445', N'Shivaji nagar gadhshisa', N'Gadhshisha ', N'Kutch ', N'Gujarat', 370445, 0, 1, CAST(7559134915 AS Numeric(10, 0)), CAST(N'2023-04-18T23:37:12.663' AS DateTime))
GO
INSERT [dbo].[Family] ( [OriginalVillage], [OriginalDistrict], [PostalAddressName], [CurrentAddress], [CurrentVillage], [CurrentDistrict], [CurrentState], [CurrentPincode], [ResidentialFacility], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( N'ભીટારા', N'', N'Dhirajbhai ', N'Dhartinagar society  bharat petrol ni same bypass road', N'Halvad ', N'Morbi', N'Gujarat', 363330, 0, 1, CAST(9427066926 AS Numeric(10, 0)), CAST(N'2023-04-18T23:54:22.460' AS DateTime))
GO
INSERT [dbo].[Family] ( [OriginalVillage], [OriginalDistrict], [PostalAddressName], [CurrentAddress], [CurrentVillage], [CurrentDistrict], [CurrentState], [CurrentPincode], [ResidentialFacility], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( N'દુર્ગાપર', N'', N'Bungalow no. 06, Ilark homes, prisha park society, Ghanshyam park - 1, Mundra Kutch, 370421', N'Bungalow no. 06, Ilark homes, prisha park society, Ghanshyam park - 1, Mundra Kutch, 370421', N'Mundra, Kutch', N'Kutch', N'Gujarat', 370421, 0, 1, CAST(9913258981 AS Numeric(10, 0)), CAST(N'2023-04-19T00:08:55.517' AS DateTime))
GO
INSERT [dbo].[Family] ( [OriginalVillage], [OriginalDistrict], [PostalAddressName], [CurrentAddress], [CurrentVillage], [CurrentDistrict], [CurrentState], [CurrentPincode], [ResidentialFacility], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( N'ગુંદિયાલી', N'', N'Senghani ravilal ramji', N'Moravadi vistar shekhaibag ', N'Gundiyali ', N'Mandvi kutchh', N'Gujarat', 370455, 0, 1, CAST(9925315023 AS Numeric(10, 0)), CAST(N'2023-04-19T01:16:57.567' AS DateTime))
GO
INSERT [dbo].[Family] ( [OriginalVillage], [OriginalDistrict], [PostalAddressName], [CurrentAddress], [CurrentVillage], [CurrentDistrict], [CurrentState], [CurrentPincode], [ResidentialFacility], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( N'મેરાઉ', NULL, N'Senghani Haresh kanjibhai.', N'D.201 Syamsikar Residensy.Naroda.Ahemdabad.', N'Ahemdabad. Naroda.', N'Ahemdabad ', N'Gujarat', 382330, 0, 1, CAST(9825428264 AS Numeric(10, 0)), CAST(N'2023-04-19T01:38:25.443' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[Family] OFF
GO



----------------------------------------------------------------------------------------------------------------------------------
SET IDENTITY_INSERT [dbo].[FamilyMember] ON 

INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Bhagwanji ', N'Manji', 1, N'Male', 58, N'Married', N'Ssc', N'', CAST(9422495719 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:17:01.360' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Bhagwanji ', N'Manji', 1, N'Male', 58, N'Married', N'Ssc', N'', CAST(9422495719 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:47:30.147' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Bhagwanji ', N'Manji', 1, N'Male', 58, N'Married', N'Ssc', N'', CAST(9422495719 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:47:31.587' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Kalpnaben', N'Bhagwanji', 7, N'Female', 56, N'Married', N'7 th', N'House wifif', CAST(9518757072 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:04.587' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Kalpnaben', N'Bhagwanji', 7, N'Female', 56, N'Married', N'7 th', N'House wifif', CAST(9518757072 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:05.553' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Kalpnaben', N'Bhagwanji', 7, N'Female', 56, N'Married', N'7 th', N'House wifif', CAST(9518757072 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:05.557' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Kalpnaben', N'Bhagwanji', 7, N'Female', 56, N'Married', N'7 th', N'House wifif', CAST(9518757072 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:08.977' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Kalpnaben', N'Bhagwanji', 7, N'Female', 56, N'Married', N'7 th', N'House wifif', CAST(9518757072 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:09.313' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Kalpnaben', N'Bhagwanji', 7, N'Female', 56, N'Married', N'7 th', N'House wifif', CAST(9518757072 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:05.560' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Kalpnaben', N'Bhagwanji', 7, N'Female', 56, N'Married', N'7 th', N'House wifif', CAST(9518757072 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:03.387' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Kalpnaben', N'Bhagwanji', 7, N'Female', 56, N'Married', N'7 th', N'House wifif', CAST(9518757072 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:08.973' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:17:13.683' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:06.950' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:07.013' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:55:17.767' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:07.490' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:07.480' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:07.720' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:07.717' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:07.197' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:07.480' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:08.547' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:27.583' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:55:08.540' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:30.337' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:32.423' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:34.677' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:37.447' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:40.470' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:43.537' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:55:03.263' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House wifif', CAST(9028908717 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T11:54:55.297' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Kalpnaben', N'Bhagwanji', 7, N'Female', 56, N'Married', N'7 th', N'House wifif', CAST(9422495719 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:17:22.220' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Mayur', N'Bhagwanji', 5, N'Male', 37, N'Married', N'12th', NULL, CAST(9834675164 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:17:39.000' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Mohak', N'Mayur', 27, N'Male', 11, N'Single', N'6 th', N'Abhyash', CAST(9422495719 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:17:29.193' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Tanak', N'Mayur', 28, N'Female', 8, N'Single', N'2 nd', NULL, CAST(9422495719 AS Numeric(10, 0)), 1, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:17:45.673' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Bhagwanji ', N'Manji', 1, N'Male', 58, N'Married', N'Ssc', N'', CAST(9422495719 AS Numeric(10, 0)), 1, 1, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:10:37.977' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Kalpnaben', N'Bhagwanji', 7, N'Female', 56, N'Married', N'7th', N'House waiff', CAST(9518757072 AS Numeric(10, 0)), 1, 1, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:12:25.960' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Mayur', N'Bhagwanji', 5, N'Male', 37, N'Married', N'12th', NULL, CAST(9860673338 AS Numeric(10, 0)), 1, 1, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:13:57.230' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Krupa', N'Mayur', 25, N'Female', 37, N'Married', N'Bcom', N'House waiff', CAST(9028908717 AS Numeric(10, 0)), 1, 1, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:15:00.480' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Mohak', N'Mayur', 27, N'Male', 11, N'Single', N'6 th', N'Abhyash', CAST(9834675164 AS Numeric(10, 0)), 1, 1, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:15:55.123' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1257, N'Tanak', N'Mayur', 28, N'Female', 8, N'Single', N'2 nd', N'Abhyaah', CAST(9422495719 AS Numeric(10, 0)), 1, 1, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:16:38.270' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1258, N'Chandrakant ', N'Ishvarlal ', 1, N'Male', 38, N'Married', N'9', N'Farmer ', CAST(7738440834 AS Numeric(10, 0)), 1, 1, CAST(7738440834 AS Numeric(10, 0)), CAST(N'2023-04-18T20:26:20.217' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1258, N'Kanchan ', N'Chandrakant ', 7, N'Male', 36, N'Married', N'9', N'Housewife ', CAST(7567030270 AS Numeric(10, 0)), 1, 1, CAST(7738440834 AS Numeric(10, 0)), CAST(N'2023-04-18T20:27:21.043' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1259, N'SHANTILAL', N'NARAN ', 1, N'Male', 58, N'Married', N'12TH', N'KHETI', CAST(9429007873 AS Numeric(10, 0)), 1, 1, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T20:57:19.290' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1259, N'AMRUTBEN', N'SHANTILAL', 7, N'Female', 56, N'Married', N'10TH', N'KHETI', NULL, 1, 1, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T20:55:45.680' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1259, N'NILESH', N'SHANTILAL', 5, N'Male', 34, N'Married', N'B.A.', N'SHOP', CAST(9726762806 AS Numeric(10, 0)), 1, 1, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T20:57:07.640' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1259, N'KOMAL', N'NILESH', 25, N'Female', 33, N'Married', N'10TH', NULL, NULL, 1, 1, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T20:58:20.960' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1259, N'MINTI', N'NILESH', 28, N'Female', 9, N'Single', N'4TH', NULL, NULL, 1, 1, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T20:59:44.520' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1259, N'ANSH', N'NILESH', 27, N'Male', 5, N'Single', N'NURSERY', NULL, NULL, 1, 1, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T21:01:00.110' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1259, N'KEVAL', N'SHANTILAL', 5, N'Male', 31, N'Married', N'M.B.A.', N'SHOP', CAST(9429007873 AS Numeric(10, 0)), 1, 1, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T21:02:42.513' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1259, N'JINAL', N'KEVAL', 25, N'Female', 30, N'Married', N'12TH', NULL, NULL, 1, 1, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T21:03:20.917' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1259, N'DRITI', N'KEVAL', 28, N'Female', 3, N'Single', NULL, NULL, NULL, 1, 1, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T21:04:20.757' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1260, N'subhash ', N'karamsi', 1, N'Male', 42, N'Single', N'10', N'real asstet', CAST(7990856678 AS Numeric(10, 0)), 1, 1, CAST(7990856678 AS Numeric(10, 0)), CAST(N'2023-04-18T22:27:35.943' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1260, N'maniben ', N'karamsi ', 2, N'Female', 72, N'Other', NULL, N'house wife ', NULL, 1, 1, CAST(7990856678 AS Numeric(10, 0)), CAST(N'2023-04-18T22:28:16.853' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1262, N'Dhirajbhai ', N'Naranbhai', 1, N'Male', 45, N'Married', N'S. S. C', N'Farmer ', CAST(9427066926 AS Numeric(10, 0)), 1, 1, CAST(9427066926 AS Numeric(10, 0)), CAST(N'2023-04-18T23:55:54.500' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1262, N'Shueilaben', N'Dharajbhai', 7, N'Female', 44, N'Married', N'S. S. C', N'Home House ', NULL, 1, 1, CAST(9427066926 AS Numeric(10, 0)), CAST(N'2023-04-18T23:58:17.493' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1262, N'Bhaktiben', N'Dharajbhai', 4, N'Female', 19, N'Single', N'T. Y. B. Com', N'Study ', NULL, 1, 1, CAST(9427066926 AS Numeric(10, 0)), CAST(N'2023-04-19T00:00:03.737' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1262, N'Dhyaniben', N'Dhirajbhai ', 4, N'Female', 16, N'Single', N'10 std', N'Study', NULL, 1, 1, CAST(9427066926 AS Numeric(10, 0)), CAST(N'2023-04-19T00:01:48.043' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1262, N'Dhyan ', N'Dharajbhai', 5, N'Male', 13, N'Single', N'7 std', N'Study', NULL, 1, 1, CAST(9427066926 AS Numeric(10, 0)), CAST(N'2023-04-19T00:02:37.493' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1263, N'Navinchandra Senghani', N'Meghji', 1, N'Male', 55, N'Married', N'MBA INDUSTRIAL AUTOMATION ', N'Private JOB', CAST(9913258981 AS Numeric(10, 0)), 1, 1, CAST(9913258981 AS Numeric(10, 0)), CAST(N'2023-04-19T00:11:48.090' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1263, N'Jyotiben', N'Navinchandra ', 7, N'Female', 51, N'Married', N'10 th pass', N'House wife', CAST(6354837063 AS Numeric(10, 0)), 1, 1, CAST(9913258981 AS Numeric(10, 0)), CAST(N'2023-04-19T00:14:23.263' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1263, N'Nirav ', N'Navinchandra ', 5, N'Male', 30, N'Married', N'M.Tech, Electrical Engineer ', N'Owner Sun Innovative ', CAST(9913258981 AS Numeric(10, 0)), 1, 1, CAST(9913258981 AS Numeric(10, 0)), CAST(N'2023-04-19T00:15:27.257' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1263, N'Trupti', N'Nirav', 25, N'Female', 31, N'Married', N'Fashion designer ', N'Private', CAST(9023117356 AS Numeric(10, 0)), 1, 1, CAST(9913258981 AS Numeric(10, 0)), CAST(N'2023-04-19T00:18:27.547' AS DateTime))
GO
INSERT [dbo].[FamilyMember] ([FamilyID], [FirstName], [FatherHusbandName], [RelationID], [Gender], [Age], [MaritalStatus], [Education], [Business], [Mobile], [AttendingProgram], [Active], [ModifiedByID], [ModifiedDate]) VALUES ( 1263, N'Nishiv', N'Nirav', 27, N'Male', 3, N'Single', N'NA', N'NA', CAST(6351040212 AS Numeric(10, 0)), 1, 1, CAST(9913258981 AS Numeric(10, 0)), CAST(N'2023-04-19T00:19:11.710' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[FamilyMember] OFF
GO

--------------------------







SET IDENTITY_INSERT [dbo].[DaughterDetail] ON 

INSERT [dbo].[DaughterDetail] ( [FamilyID], [FirstName], [HusbandName], [FatherInLawName], [Surname], [RelationID], [Village], [Age], [Mobile], [Active], [AttendingProgram], [Alive], [GiftRecieved], [ModifiedByID], [ModifiedDate]) VALUES (1257, N'Ashmita', N'Jayesh', N'Narshih', N'Ramjiyani', 19, N'Nalasopara gadjsisa', 35, CAST(9307459806 AS Numeric(10, 0)), 1, 1, 3, 0, CAST(9422495719 AS Numeric(10, 0)), CAST(N'2023-04-18T12:01:08.797' AS DateTime))
GO
INSERT [dbo].[DaughterDetail] ( [FamilyID], [FirstName], [HusbandName], [FatherInLawName], [Surname], [RelationID], [Village], [Age], [Mobile], [Active], [AttendingProgram], [Alive], [GiftRecieved], [ModifiedByID], [ModifiedDate]) VALUES (1259, N'PRIYA', N'HARESH', N'BABU BHAI', N'RAMANI', 19, N'HARIPURA', 33, CAST(9712769942 AS Numeric(10, 0)), 1, 1, 3, 0, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T21:12:38.087' AS DateTime))
GO
INSERT [dbo].[DaughterDetail] ( [FamilyID], [FirstName], [HusbandName], [FatherInLawName], [Surname], [RelationID], [Village], [Age], [Mobile], [Active], [AttendingProgram], [Alive], [GiftRecieved], [ModifiedByID], [ModifiedDate]) VALUES (1259, N'VIMALA BEN', N'VITTHAL BHAI', N'PREMJIBHAI', N'RAMJIYANI', 21, N'KURBAI', 60, CAST(9427839662 AS Numeric(10, 0)), 1, 1, 3, 0, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T21:32:41.553' AS DateTime))
GO
INSERT [dbo].[DaughterDetail] ( [FamilyID], [FirstName], [HusbandName], [FatherInLawName], [Surname], [RelationID], [Village], [Age], [Mobile], [Active], [AttendingProgram], [Alive], [GiftRecieved], [ModifiedByID], [ModifiedDate]) VALUES (1259, N'RAMILA BEN', N'LAKHAMSHI', N'MANJI', N'RAMAJIYANI', 21, N'RAYAN', 56, CAST(9913598016 AS Numeric(10, 0)), 1, 1, 3, 0, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T21:35:13.330' AS DateTime))
GO
INSERT [dbo].[DaughterDetail] ( [FamilyID], [FirstName], [HusbandName], [FatherInLawName], [Surname], [RelationID], [Village], [Age], [Mobile], [Active], [AttendingProgram], [Alive], [GiftRecieved], [ModifiedByID], [ModifiedDate]) VALUES (1259, N'NIRU BEN', N'DINESH', N'BHANJI', N'VASANI', 21, N'VIRANI', 52, CAST(9029050254 AS Numeric(10, 0)), 1, 1, 3, 0, CAST(9429007873 AS Numeric(10, 0)), CAST(N'2023-04-18T21:36:59.530' AS DateTime))
GO
INSERT [dbo].[DaughterDetail] ( [FamilyID], [FirstName], [HusbandName], [FatherInLawName], [Surname], [RelationID], [Village], [Age], [Mobile], [Active], [AttendingProgram], [Alive], [GiftRecieved], [ModifiedByID], [ModifiedDate]) VALUES (1260, N'lilaben ', N'chhaganlal ', N'kanji', N'bhagat', 21, N'dujapar', 54, NULL, 1, 1, 3, 0, CAST(7990856678 AS Numeric(10, 0)), CAST(N'2023-04-18T22:30:04.143' AS DateTime))
GO
INSERT [dbo].[DaughterDetail] ( [FamilyID], [FirstName], [HusbandName], [FatherInLawName], [Surname], [RelationID], [Village], [Age], [Mobile], [Active], [AttendingProgram], [Alive], [GiftRecieved], [ModifiedByID], [ModifiedDate]) VALUES (1260, N'lilaben ', N'chhaganlal ', N'kanji', N'bhagat', 21, N'dujapar', 54, NULL, 0, 1, 3, 0, CAST(7990856678 AS Numeric(10, 0)), CAST(N'2023-04-18T22:30:21.913' AS DateTime))
GO
INSERT [dbo].[DaughterDetail] ( [FamilyID], [FirstName], [HusbandName], [FatherInLawName], [Surname], [RelationID], [Village], [Age], [Mobile], [Active], [AttendingProgram], [Alive], [GiftRecieved], [ModifiedByID], [ModifiedDate]) VALUES (1260, N'manjulaben ', N'dinesh', N'dayalal ', N'pokar ', 21, N'moti virani', 53, NULL, 1, 1, 3, 0, CAST(7990856678 AS Numeric(10, 0)), CAST(N'2023-04-18T22:31:03.963' AS DateTime))
GO
INSERT [dbo].[DaughterDetail] ( [FamilyID], [FirstName], [HusbandName], [FatherInLawName], [Surname], [RelationID], [Village], [Age], [Mobile], [Active], [AttendingProgram], [Alive], [GiftRecieved], [ModifiedByID], [ModifiedDate]) VALUES (1260, N'shilpaben ', N'arvind ', N'valji', N'pokar ', 21, N'jiyapar ', 52, NULL, 1, 1, 3, 0, CAST(7990856678 AS Numeric(10, 0)), CAST(N'2023-04-18T22:31:55.120' AS DateTime))
GO
INSERT [dbo].[DaughterDetail] ( [FamilyID], [FirstName], [HusbandName], [FatherInLawName], [Surname], [RelationID], [Village], [Age], [Mobile], [Active], [AttendingProgram], [Alive], [GiftRecieved], [ModifiedByID], [ModifiedDate]) VALUES (1263, N'Swati', N'Akshay', N'Sureshbhai', N'Vasani', 19, N'Moti Rayan', 27, CAST(8469774155 AS Numeric(10, 0)), 1, 1, 3, 0, CAST(9913258981 AS Numeric(10, 0)), CAST(N'2023-04-19T00:21:26.693' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[DaughterDetail] OFF
GO
