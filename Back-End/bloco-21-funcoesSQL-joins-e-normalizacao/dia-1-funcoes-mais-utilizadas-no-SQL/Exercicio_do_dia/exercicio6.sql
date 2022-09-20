-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (IT_PROG).

SELECT COUNT(*) FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';