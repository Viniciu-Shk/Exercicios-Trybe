-- Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.

SELECT m.*
FROM Pixar.Movies m
INNER JOIN Pixar.Theater t
ON m.theater_id = t.id
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id
WHERE m.theater_id IS TRUE
AND b.rating > 8;