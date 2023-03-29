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


Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'અરજણપુરા','Rajesh Manilal Senghani',9925514713,'Ketan Hiralal Senghani',9979253044);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'કોટડા(ચ)','Punit Ishvarlal Senghani',8980365715,'Yogesh Bhailal Senghani',9586416451);      
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ખોભડી','Nitin Valji Senghani',9000001691,'Rajesh Manilal Senghani',9925514713);        
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ગઢસીસા','Rajesh Manilal Senghani',9925514713,'Jigar Devendra Senghani',9586482002);         
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ગુંદિયાલી','Hitesh Jentilala Senghani',9825363619,'Rajesh Manilal Senghani',9925514713);         
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ઘડુલી','Shivdash Megji Senghani',9925319927,'Rajesh Manilal Senghani',9925514713);        
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ટોડીયા','Rajesh Manilal Senghani',9925514713,'Ketan Hiralal Senghani',9979253044);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'તલવાણા/રામનગર','Svapnil Dinesh Senghani',9099944716,'Kalpesh Amrutlala Senghani',9925313395);  
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'દુર્ગાપર','Mukesh Naranbhai Senghani',9879218902,'Hitesh Mohanlal Senghani',9428567578);        
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'દેશલપર(વાંઢાય)','Hiten Devashi senghani',9879120465,'Rajesh Manilal Senghani',9925514713);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'દોલતપર','Rajesh Manilal Senghani',9925514713,'Ketan Hiralal Senghani',9979253044);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ધારેશી','Bhavesh Hiralal Senghani',9924180280,'Rajesh Manilal Senghani',9925514713);      
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'પદમપુર','Kishor Himtlala Senghani',9726195677,'Rajesh Manilal Senghani',9925514713);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'બિદડા','Ashvin Mohnlal Senghani',9925445659,'Rajesh Manilal Senghani',9925514713);         
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'ભીટારા','Rajesh Manilal Senghani',9925514713,'Ketan Hiralal Senghani',9979253044);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'મદનપુરા','Rajesh Manilal Senghani',9925514713,'Ketan Hiralal Senghani',9979253044);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'મમાયમોરા','Rajesh Manilal Senghani',9925514713,'Ketan Hiralal Senghani',9979253044);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'મંગવાના','Anand NavinBhai Senghani',6354784705,'Rajesh Manilal Senghani',9925514713);     
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'મેરાઉ','Mahesh Keshavji Senghani',9429817941,'Jitendra Santilala Senghani',9879289378);       
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રત્નાપર','Rajesh Manilal Senghani',9925514713,'Ketan Hiralal Senghani',9979253044);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રસલીયા','Kishor Vithaldas Senghan',9428750109,'Kailash Ramji Senghani',9898538123);    
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રાજપર','Anuj Parsotam Senghani',8511305935,'Ketan Hiralal Senghani',9979253044);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રામપર(સ)','Rajesh Manilal Senghani',9925514713,'Ketan Hiralal Senghani',9979253044);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'રાયણ','Dixit Mohan Senghani',9825728805,'Rajesh Manilal Senghani',9925514713);         
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'લુડવા','Rajesh Manilal Senghani',9925514713,'Ketan Hiralal Senghani',9979253044);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'વાલકા','Kishor Dharamshi Senghani',7020962950,'Ketan Hiralal Senghani',9979253044);
Insert INTO OriginalVillage (OriginalVillageName,Person1Name,Person1Mobile,Person2Name,Person2Mobile) values(N'વિરાણી કોરાવાળી','Bhavesh Jethalal Senghani',9819070008,'Rajesh Manilal Senghani',9925514713);







