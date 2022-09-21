-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT t.*, m.*
FROM Pixar.Theater t
LEFT JOIN Pixar.Movies m
ON t.id = m.theater_id
ORDER BY t.`name`;