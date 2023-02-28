USE [senganiparivar]
GO


 CREATE TABLE dbo.OriginalVillage
(  
	[OriginalVillageID] [int] IDENTITY(1,1) NOT NULL,
	[OriginalVillageName] nvarchar(max) Not NULL,
	[Person1Name] nvarchar(1000) null,
	[Person1Mobile] numeric(10, 0) NULL,
	[Person2Name] nvarchar(1000) null,
	[Person2Mobile] numeric(10, 0) NULL
	CONSTRAINT PK_OriginalVillage_OriginalVillageID PRIMARY KEY (OriginalVillageID)	  
	);
GO


Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'અરજણપુરા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'કોટડા(ચ)','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ખોભડી','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ગઢસીસા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ઘડુલી','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ટોડીયા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'તલવાણા/રામનગર','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'દુર્ગાપર','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'દેશલપર(વાંઢાય)','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'દોલતપર','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ધારેશી','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'પદમપુર','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'બિદડા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ભીટારા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'મદનપુરા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'મમાયમોરા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'મેરાઉ','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રત્નાપર','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રસલીયા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રાજપર','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રામપર(સ)','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રાયણ','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'લુડવા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'વાલકા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'વિરાણી કોરાવાળી','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'અન્ય','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);

