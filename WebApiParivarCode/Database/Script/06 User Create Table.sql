USE [senganiparivar]
GO


 CREATE TABLE dbo.UserLogin
(  
	[UserLoginID] [int] IDENTITY(1,1) NOT NULL,
	[Mobile] numeric(10, 0) NULL,
	[OTP] int,	
	[IsLoginSuccess] bit default 0,
	[LoginAttemp] int default 0,
	[ModifiedDate] datetime NOT NULL default getdate(),	
	CONSTRAINT PK_UserLogin_UserLoginID PRIMARY KEY (UserLoginID)	  
	);
GO
