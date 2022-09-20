-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo DEPARTMENT_ID.

SELECT department_id, COUNT(*) AS numero_de_funcs, AVG(salary) AS media_salarial FROM hr.employees
GROUP BY department_id
HAVING numero_de_funcs > 10;