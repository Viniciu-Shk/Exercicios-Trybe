-- Exercício 4: O título do filme "Ratatouille" está incorreto na tabela Movies. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando UPDATE.

SELECT * FROM Pixar.Movies;

UPDATE Pixar.Movies
SET title = 'Ratatouille', `year` = 2010
WHERE id = 3;