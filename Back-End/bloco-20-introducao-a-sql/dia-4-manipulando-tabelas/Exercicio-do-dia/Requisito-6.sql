-- Exercício 6: Exclua da tabela Movies o filme "WALL-E".

SELECT * FROM Pixar.Movies;

DELETE FROM Pixar.BoxOffice
WHERE movie_id = 11;

DELETE FROM Pixar.Movies
WHERE title = 'WALL-E';
