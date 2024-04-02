CREATE TABLE clientes(
	cliente_id SERIAL primary key,
	nome varchar(255) not null,
	email varchar(255) unique not null,
	data_cadastro date not null
)

insert into clientes (nome, email, data_cadastro) values
('Andre Feitosa','eitaqueagoravai@gmail.com', '224-04-01');
('Joao Silva', 'joao.silva@gmail.com', '2023-01-01'),
('Maria Oliveira', 'mariaoliveira@gmail.com', '2023-01-02' );


SELECT * FROM clientes

CREATE FUNCTION nome_funcao(param1 tipo, param2 tipo)
RETURNS tipo AS $$
BEGIN

END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------
DROP FUNCTION soma(integer, integer);

CREATE OR REPLACE FUNCTION soma(num01 int, num02 int)
RETURNS text AS $$
BEGIN
	
		return 'a soma dos dois numeros é:' || NUM01+NUM02;

END;
$$ LANGUAGE plpgsql;

SELECT SOMA(10,40);
----------------------------------------------------------------
CREATE OR REPLACE FUNCTION atualizar_email(
    IN cliente_id INT,
    IN novo_email VARCHAR
)
RETURNS VOID AS
$$
DECLARE
    email_existente BOOLEAN;
BEGIN
    -- Verificar se o novo email já está em uso
    SELECT EXISTS (SELECT 1 FROM clientes WHERE email = novo_email) INTO email_existente;

    -- Se o novo email já estiver em uso, lançar um erro
    IF email_existente THEN
        RAISE EXCEPTION 'O email "%"' 'já está em uso.', novo_email;
    ELSE
       UPDATE clientes SET email = novo_email WHERE id = cliente_id;
    END IF;
END;
$$
LANGUAGE plpgsql;

-----------------------------------------------------
CREATE OR REPLACE FUNCTION atualizar_email(
    cliente_id INT,
    novo_email VARCHAR
)
RETURNS VOID AS
$$
DECLARE
    email_existente BOOLEAN;
BEGIN
    
    SELECT EXISTS (SELECT 1 FROM clientes WHERE email = novo_email) INTO email_existente;

    
    IF email_existente THEN
        RAISE EXCEPTION 'O email "%" já está em uso.', novo_email;
    ELSE
       UPDATE clientes SET email = novo_email WHERE id = cliente_id;
    END IF;
END;
$$
LANGUAGE plpgsql;


SELECT atualizar_email(2, 'andre.feitosa.maia@gmail.com');



DROP FUNCTION atualizar_email_cliente();

----------------------------------------------------------
CREATE OR REPLACE FUNCTION atualizar_email(
    IN id_usuario INT,
    IN novo_email VARCHAR
)
RETURNS VOID AS
$$
DECLARE
    email_existente BOOLEAN;
BEGIN
    -- Verificar se o novo email já está em uso
    SELECT EXISTS (SELECT 1 FROM clientes WHERE email = novo_email) INTO email_existente;

    -- Se o novo email já estiver em uso, lançar um erro
    IF email_existente THEN
        RAISE EXCEPTION 'O email "%" já está em uso.', novo_email;
    ELSE
        -- Caso contrário, atualizar o email do usuário
        UPDATE clientes SET email = novo_email WHERE cliente_id = id_usuario;
    END IF;
END;
$$
LANGUAGE plpgsql;


SELECT atualizar_email(3,'andrefmaia@hotmail.com');

select * from clientes;
