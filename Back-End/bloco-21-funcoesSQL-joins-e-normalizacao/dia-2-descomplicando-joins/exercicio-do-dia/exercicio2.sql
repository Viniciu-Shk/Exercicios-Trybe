-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).

SELECT b.domestic_sales, b.international_sales, m.title
FROM Pixar.BoxOffice b
INNER JOIN Pixar.Movies m
ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales;