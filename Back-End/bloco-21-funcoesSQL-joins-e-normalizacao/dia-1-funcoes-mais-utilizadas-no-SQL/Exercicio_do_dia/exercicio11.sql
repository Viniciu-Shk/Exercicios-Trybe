-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.

UPDATE hr.employees
SET phone_number = IF(
	LEFT(phone_number, 3) = 515, REPLACE(phone_number, LEFT(phone_number, 3), 777), phone_number
    );