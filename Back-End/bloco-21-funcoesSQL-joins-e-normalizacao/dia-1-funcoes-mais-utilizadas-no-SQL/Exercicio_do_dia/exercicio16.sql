-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

SELECT UCASE(CONCAT(first_name, ' ', last_name)) AS nome_completo
FROM hr.employees;