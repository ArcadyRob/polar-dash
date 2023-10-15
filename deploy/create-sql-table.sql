CREATE TABLE [dbo].[TriviaQuestion] (
    [Id] INT IDENTITY (1, 1) NOT NULL,
    [Question] VARCHAR (MAX) NOT NULL,
    [Answer] VARCHAR (MAX) NOT NULL,
    PRIMARY KEY (Id)
);