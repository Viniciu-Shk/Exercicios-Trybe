-- Exercício 1: Insira as produções da Pixar na tabela Movies:
-- Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
-- Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
-- Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
-- WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.

INSERT INTO Pixar.Movies(director, length_minutes, title, `year`)
VALUES
('Pete Docter', 92, 'Monstros SA', 2001),
('Jhon Lasseter', 107, 'Procurando Nemo', 2003),
('Brad Bird', 116, 'Os Incríveis', 2004),
('Pete Docter', 104, 'WALL-E', 2008);