CREATE TABLE teste1 (
	nome VARCHAR (100),
	telefone VARCHAR (20)

);


INSERT INTO [dbo].[teste]
	(nome,telefone)
VALUES
	('Pedro','9509345098'),
	('João','9456456456'),
	('Maria','4564564568'),
	('Jorge','456456456456'),
	('Felipe','78978978978')
;

SELECT * FROM [dbo].[teste]

UPDATE [dbo].[teste]
SET telefone = '00000000000'
WHERE nome = 'Pedro'

DELETE [dbo].[teste]
where nome = 'Pedro'

ALTER TABLE [dbo].[teste]
ADD email VARCHAR(20);

ALTER TABLE [dbo].[teste]
ADD cpf VARCHAR(20);

ALTER TABLE [dbo].[teste]
ALTER COLUMN cpf INT;

ALTER TABLE [dbo].[teste]
DROP COLUMN email;

INSERT INTO [dbo].[teste]
	(email)
VALUES
	('andrefmaia@hotmail.com'),
	('andrefmaia@hotmail.com'),
	('andrefmaia@hotmail.com'),
	('andrefmaia@hotmail.com')
;