-- Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.

SELECT name FROM Scientists.Projects
WHERE code LIKE '%H%';