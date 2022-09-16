-- Exercício 10: Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.

SELECT id FROM Pixar.Movies
WHERE length_minutes < 100;

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM Pixar.Movies
WHERE id IN (1, 6, 7, 8);