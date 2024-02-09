/*SELECT 
nome as Nome,
nascimento as Nascimento,
pretensao_salarial as Pretensao
FROM [DBO].funcionario
WHERE pretensao_salarial >= 5000
order by pretensao_salarial
*/


SELECT 
id_departamento,
id_cargo,
SUM(salario) AS Salario
FROM [DBO].[lotacao]
GROUP BY id_departamento, id_cargo