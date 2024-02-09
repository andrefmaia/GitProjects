SELECT
funcionario.id,
funcionario.nome,
funcionario.nascimento,
funcionario.pretensao_salarial,
CASE	
	WHEN funcionario.pcd = 1 THEN 'SIM'
	ELSE 'NÃO'
END AS PCD,
D.nome AS Dependente,
TD.nome AS Tipo_Dependente
FROM [funcionario]

LEFT JOIN dependente D ON D.id_funcionario = funcionario.id
LEFT JOIN tipo_dependente TD ON TD.id = D.id_tipo_dependente
LEFT JOIN lotacao LT ON LT.id_pessoa = funcionario.id
LEFT JOIN departamento DPTO ON DPTO.id = LT.id_departamento

WHERE DPTO.nome='Tecnologia da Informação'
