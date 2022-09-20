-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

SELECT
ROUND(MAX(salary), 2) AS maior_salario,
ROUND(MIN(salary), 2) AS menor_salario,
ROUND(SUM(salary), 2) AS valor_total,
ROUND(AVG(salary), 2) AS media_salarios
FROM hr.employees;