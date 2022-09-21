-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.

SELECT b.domestic_sales, b.international_sales, m.title
FROM Pixar.BoxOffice b
INNER JOIN Pixar.Movies m
ON b.movie_id = m.id;