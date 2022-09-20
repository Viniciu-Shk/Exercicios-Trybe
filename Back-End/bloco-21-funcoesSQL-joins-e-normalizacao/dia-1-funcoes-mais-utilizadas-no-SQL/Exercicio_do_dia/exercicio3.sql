-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.

SELECT job_id, AVG(salary) AS media_entre_valores FROM hr.employees
GROUP BY job_id
ORDER BY media_entre_valores DESC;