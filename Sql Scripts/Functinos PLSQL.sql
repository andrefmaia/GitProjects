create database vendas_nerdbit;

drop database vendas_nerdbit_2;

create table tb_pessoa(
 	id bigint,
 	nome varchar(50),
	idade integer
);

alter table tb_pessoa add column
	sexo boolean;
	
alter table tb_pessoa rename column
	nome_m to nome_mae;
	
select * from tb_pessoa;

insert into tb_pessoa (id, nome, idade, sexo, nome_mae) values(
	1, 'Andre Maia', 42, true, 'Sonia Maia'
);

insert into tb_pessoa values(
	1, 'Andre Maia', 42, true, 'Sonia Maia'
);
	
	
create or replace function calcular_idade (data_nascimento date) return int $$
declare
	idade int;
begin
	select extract(year from age(data_nascimento)) into idade;
	return idade;
end;
$$ language plpgsql;

	
CREATE OR REPLACE FUNCTION calcular_idade(data_nascimento date)
RETURNS integer AS $$
DECLARE
    idade integer;
BEGIN
    SELECT EXTRACT(YEAR FROM age(current_date, data_nascimento))::integer INTO idade;
    RETURN idade;
END;
$$ LANGUAGE plpgsql;


