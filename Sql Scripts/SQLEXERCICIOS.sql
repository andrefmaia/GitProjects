SELECT
D.nome AS nome_departamento,
SUM(L.salario) AS salario
FROM departamento D
LEFT JOIN lotacao L ON L.id_departamento = D.id
GROUP BY D.nome
ORDER BY salario DESC

SELECT
C.nome AS nome_cargo,
AVG(L.salario) AS salario
FROM cargo C
LEFT JOIN lotacao L ON L.id_cargo = C.id
GROUP BY C.nome
ORDER BY salario DESC

/***************************************************************************/


SELECT
A.nome_departamento,
A.nome_cargo,
AVG(A.salario_diferente) AS dif_salario
FROM (
SELECT 
f.nome AS nome_funcionario,
C.nome AS nome_cargo,
D.nome AS nome_departamento,
f.pretensao_salarial,
l.salario,
(l.salario - f.pretensao_salarial) AS salario_diferente
FROM 
funcionario F  
LEFT JOIN lotacao L ON L.id_pessoa = f.id
LEFT JOIN departamento	D ON D.id = L.id_departamento
LEFT JOIN cargo C ON C.id = L.id_cargo
) A
GROUP BY A.nome_departamento, A.nome_cargo