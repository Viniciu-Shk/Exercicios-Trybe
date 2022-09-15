-- Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A.

SELECT name, code FROM Scientists.Projects
WHERE name NOT LIKE 'A%';