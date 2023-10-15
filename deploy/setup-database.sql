CREATE TABLE [dbo].[TriviaQuestion] (
    [Id] INT IDENTITY (1, 1) NOT NULL,
    [Question] VARCHAR (MAX) NOT NULL,
    [Answer] VARCHAR (MAX) NOT NULL,
    PRIMARY KEY (Id)
);

INSERT INTO [dbo].[TriviaQuestion] ([Question], [Answer]) VALUES
('What element has the symbol Hg?', 'Mercury'),
('What is the name of the longest river in the world?', 'The Nile River'),
('Where do polar bears live?', 'The North Pole'),
('How many bones are in the human body?', '206'),
('Where does Batman live?', 'Gotham City'),
('What is hummus made from?', 'Chickpeas'),
('How many days are in a leap year?', '366'),
('What is the name of the red race car in Cars?', 'Lightning McQueen'),
('What animal has the biggest brain?', 'Sperm Whale'),
('Which shape has 7 sides?', 'Heptagon or Septagon'),
('What was Cinderellas slipper made out of?', 'Glass'),
('What kind of eclipse is when the Moon is in front of the Earth?', 'Solar Eclipse'),
('What kind of eclipse is when the Earth is in front of the Moon?', 'Lunar Eclipse'),
('What is the name of Harry Potters pet owl?', 'Hedwig'),
('What is the name of Han Solos spaceship?', 'Millennium Falcon'),
('What fruit is the only one of bear seeds on the outside?', 'Strawberries'),
('Which astrological sign is represented by the crab?', 'Cancer'),
('What is the name of the tallest building in the world?', 'Burj Khalifa'),
('What is a group of jellyfish called?', 'A smack'),
('Which animal can survive space, boiling water, and temperatures close to absolute zero?', 'Tardigrade');
