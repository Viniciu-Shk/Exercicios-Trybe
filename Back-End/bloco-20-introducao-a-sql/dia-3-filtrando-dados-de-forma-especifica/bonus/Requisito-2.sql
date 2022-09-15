-- Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.

SELECT name FROM Scientists.Projects
WHERE code LIKE 'A%'
ORDER BY name;