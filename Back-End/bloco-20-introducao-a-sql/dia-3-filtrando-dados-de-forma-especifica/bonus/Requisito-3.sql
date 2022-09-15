-- Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.

SELECT code, name FROM Scientists.Projects
WHERE code LIKE '%3%'
ORDER BY name;