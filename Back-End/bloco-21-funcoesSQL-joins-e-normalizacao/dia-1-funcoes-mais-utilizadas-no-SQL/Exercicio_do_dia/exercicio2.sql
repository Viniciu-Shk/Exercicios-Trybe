-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.

SELECT MAX(salary) - MIN(salary) AS diferenca_entre_valores FROM hr.employees;