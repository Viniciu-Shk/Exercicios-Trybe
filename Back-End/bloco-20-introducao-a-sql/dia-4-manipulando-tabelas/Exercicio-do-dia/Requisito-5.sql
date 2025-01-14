-- Exercício 5: Insira as novas classificações abaixo na tabela BoxOffice, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies:
-- Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
-- Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
-- WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

SELECT * FROM Pixar.Movies;

INSERT INTO Pixar.BoxOffice(domestic_sales, international_sales, movie_id, rating)
VALUES
(300000000, 250000000, 8, 8.5),
(460000000, 510000000, 10, 7.4),
(290000000, 280000000, 11, 9.9);