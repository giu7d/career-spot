﻿CREATE TABLE [candidate] (
    [CandidateId]      INT             IDENTITY (1, 1) NOT NULL,
    [CandidateCity]    NVARCHAR (MAX)  NOT NULL,
    [CandidateCountry] NVARCHAR (MAX)  NOT NULL,
	[IdFile] [uniqueidentifier] unique ROWGUIDCOL NOT NULL DEFAULT newid(),
    [CandidateCV]      VARBINARY (MAX) FILESTREAM NULL,
    [CandidateEmail]   NVARCHAR (MAX)  NOT NULL,
    [CandidateState]   NVARCHAR (MAX)  NOT NULL,
    [CandidateName]    NVARCHAR (MAX)  NOT NULL,
    CONSTRAINT [PK_candidate] PRIMARY KEY CLUSTERED ([CandidateId] ASC)
);