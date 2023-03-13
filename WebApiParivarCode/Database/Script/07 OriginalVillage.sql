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
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'કોટડા(ચ)','Punit ishvarlal',8980365715,'Dilip Hiralal',9825975949);       --Done
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ખોભડી','Nitin Valjibhai',9000001691,'Dilip Hiralal',9825975949);         --Done
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ગઢસીસા','Hiten Devashi',9879120465,'Dilip Hiralal',9825975949);          --Done
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ગુંદિયાલી','હિતેશ જયંતીલાલ',9825363619,'Dilip Hiralal',9825975949);         --Added afterwards --Done
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ઘડુલી','શિવદાસભાઈ મેઘજીભાઇ',9925319927,'Dilip Hiralal',9825975949);         -- Done
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ટોડીયા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'તલવાણા/રામનગર','સ્વપ્નિલ દિનેશભાઈ',9099944716,'Dilip Hiralal',9825975949); --Done 
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'દુર્ગાપર','Dipak Hareshbhai',9825851225,'Dilip Hiralal',9825975949);         --Done
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'દેશલપર(વાંઢાય)','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'દોલતપર','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ધારેશી','Bhavesh Hiralal',9924180280,'Dilip Hiralal',9825975949);       -- Done
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'પદમપુર','કિશોર હિંમતલાલ',9726195677,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'બિદડા','હિતેશ જયંતીલાલ',9825363619,'Dilip Hiralal',9825975949);         --Done
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ભીટારા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'મદનપુરા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'મમાયમોરા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'મંગવાના','Anand NavinBhai',6354784705,'Dilip Hiralal',9825975949);     --Added afterwards --Done
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'મેરાઉ','મહેશ કેશવજીભાઈ',9429817941,'Dilip Hiralal',9825975949);        --Done
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રત્નાપર','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રસલીયા','Kishor Vithaldas',9428750109,'Dilip Hiralal',9825975949);    -- Done
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રાજપર','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રામપર(સ)','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રાયણ','દિક્ષિત મોહનભાઇ',9825728805,'Dilip Hiralal',9825975949);          --Done
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'લુડવા','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'વાલકા','Kishor Dharamshi',7020962950,'Dilip Hiralal',9825975949);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'વિરાણી કોરાવાળી','Ketan Hiralal',9979253044,'Dilip Hiralal',9825975949);


