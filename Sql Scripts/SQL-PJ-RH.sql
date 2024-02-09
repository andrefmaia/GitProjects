--USE RH;
/*-------comentario-------*/

CREATE TABLE funcionario
(
	id INT IDENTITY NOT NULL PRIMARY KEY,
	nome VARCHAR(100),
	nascimento DATE,
	pretensao_salarial NUMERIC(18,2),
	pcd BIT
);

CREATE TABLE tipo_contato
(
	id INT IDENTITY NOT NULL PRIMARY KEY,
	tipo_contato VARCHAR(20)
);

CREATE TABLE contato
(
	id INT IDENTITY NOT NULL PRIMARY KEY,
	contato VARCHAR(100),
	id_funcionario INT, 
	id_tipo_contato INT,
	CONSTRAINT FK_id_funcionario FOREIGN KEY (id_funcionario)
		REFERENCES [dbo].[funcionario] (id),
	
	CONSTRAINT FK_id_tipo_contato FOREIGN KEY (id_tipo_contato)
		REFERENCES [dbo].[tipo_contato] (id)
);

CREATE TABLE tipo_dependente
(
	id INT IDENTITY NOT NULL PRIMARY KEY,
	nome VARCHAR(100)

);

CREATE TABLE dependente
(
	id INT IDENTITY NOT NULL PRIMARY KEY,
	nome VARCHAR(100),
	id_funcionario INT,
	id_tipo_dependente INT,

	CONSTRAINT FK_dependente_id_funcionario FOREIGN KEY (id_funcionario)
		REFERENCES [dbo].[funcionario] (id),

	CONSTRAINT FK_id_tipo_dependente FOREIGN KEY (id_tipo_dependente)
		REFERENCES [dbo].[tipo_dependente] (id)
	
);

CREATE TABLE departamento
(
	
	id INT IDENTITY NOT NULL PRIMARY KEY,
	nome VARCHAR(100)

);

CREATE TABLE cargo
(
	
	id INT IDENTITY NOT NULL PRIMARY KEY,
	nome VARCHAR(100)

);


CREATE TABLE lotacao
(
	id INT IDENTITY NOT NULL PRIMARY KEY,
	salario NUMERIC (18,2),
	ativo BIT,

	id_pessoa INT,
	id_departamento INT,
	id_cargo INT,

	CONSTRAINT FK_locatacao_idPessoa FOREIGN KEY (id_pessoa)
		REFERENCES [dbo].[funcionario] (id),

	CONSTRAINT FK_locatacao_idDepartamento FOREIGN KEY (id_departamento)
		REFERENCES [dbo].[departamento] (id),

	CONSTRAINT FK_locatacao_idCargo FOREIGN KEY (id_cargo)
		REFERENCES [dbo].[cargo] (id)

);
