CREATE TABLE vendas (
    venda_id SERIAL PRIMARY KEY,
    produto_id INT,
    quantidade INT,
    preco_unitario NUMERIC,
    data_venda DATE
);


select * from vendas;

CREATE OR REPLACE FUNCTION calcular_desconto_vendas(
    produto_id INT,
    data_inicio DATE,
    data_fim DATE,
    valor_minimo NUMERIC,
    desconto NUMERIC
)
RETURNS NUMERIC AS $$
DECLARE
    total_vendas NUMERIC;
    valor_final NUMERIC;
BEGIN
    -- Calcula o total de vendas para o produto_id dentro do intervalo de datas
    SELECT SUM(quantidade * preco_unitario)
    INTO total_vendas
    FROM vendas
    WHERE produto_id = calcular_desconto_vendas.produto_id
    AND data_venda BETWEEN calcular_desconto_vendas.data_inicio AND calcular_desconto_vendas.data_fim;

    -- Verifica se o total de vendas excede o valor mínimo
    IF total_vendas > valor_minimo THEN
        -- Aplica o desconto se exceder
        valor_final := total_vendas - (total_vendas * (desconto / 100));
    ELSE
        -- Retorna o total de vendas sem desconto se não exceder
        valor_final := total_vendas;
    END IF;

    RETURN valor_final;
END;
$$ LANGUAGE plpgsql;

SELECT calcular_desconto_vendas(1, '2024-03-18', '2024-03-31', 100, 10);

SELECT calcular_desconto_vendas(3, '2024-01-01', '2024-03-31', 1000, 10);



DO $$
DECLARE
    -- Declaração de variáveis locais, se necessário
BEGIN
    calcular_desconto_vendas(3, '2024-01-01', '2024-03-31', 1000, 10);
END;
$$;


CREATE OR REPLACE FUNCTION soma(num1 INT, num2 INT)
RETURNS INT AS $$
DECLARE
    -- Declaração de variáveis locais
	total_soma INT;
BEGIN
    total_soma := num1 + num2;
	
	RETURN total_soma;
END;
$$ LANGUAGE plpgsql;

SELECT soma(10, 5);




CREATE OR REPLACE FUNCTION desconto(valor INT)
RETURNS INT AS $$
DECLARE
    -- Declaração de variáveis locais
	total_desconto INT;
BEGIN
    total_desconto := (valor * 10)/100;
	
	RETURN total_desconto;
END;
$$ LANGUAGE plpgsql;

SELECT desconto(1000);
