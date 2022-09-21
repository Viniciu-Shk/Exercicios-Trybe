-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

SELECT m.title, b.rating
FROM Pixar.BoxOffice b
INNER JOIN Pixar.Movies m
ON b.movie_id = m.id
ORDER BY b.rating DESC;