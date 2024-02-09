SELECT * from
(
	SELECT 
	f.id,
	f.nome as nome_funcionario,
	d.nome as departamento,
	f.nascimento,

	CASE  
		WHEN f.pcd = 1 THEN ' SIM'
		ELSE 'NÃO'
	END AS pcd,
	f.pretensao_salarial,
	dep.nome as nome_dependente,
	td.nome as tipo_dependente
	from funcionario f
	LEFT JOIN lotacao l ON l.id_pessoa = f.id
	LEFT JOIN departamento d ON D.id = L.id_departamento

	LEFT JOIN dependente dep ON dep.id_funcionario = f.id
	LEFT JOIN tipo_dependente td ON td.id = dep.id_tipo_dependente
	) a

WHERE a.pcd = 'NÃO' AND a.pretensao_salarial > 5000
/**************************
WHERE a.pcd = 'NÃO' AND a.pretensao_salarial > 5000
WHERE a.nome_dependente IS NOT null
WHERE a.nome_dependente IS null
WHERE a.id NOT IN (1,2,6)
WHERE a.id IN (1,2,6)   */