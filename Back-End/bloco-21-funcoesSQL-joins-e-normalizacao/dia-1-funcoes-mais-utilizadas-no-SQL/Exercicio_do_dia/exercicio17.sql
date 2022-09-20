-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

SELECT last_name, hire_date FROM hr.employees
WHERE YEAR(hire_date) = 1987
AND MONTH(hire_date) = 7;