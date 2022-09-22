-- Exercício 1: Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

-- Nome;
-- Espécie;
-- Sexo;
-- Idade;
-- Localização.
-- Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.

-- Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

CREATE SCHEMA IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL
);

CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY(gerente_id) REFERENCES gerente(gerente_id)
);

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    especie VARCHAR(45) NOT NULL,
    sexo VARCHAR(45) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(45) NOT NULL
);

CREATE TABLE animal_cuidador(
	animal_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY (animal_id, cuidador_id),
    FOREIGN KEY(animal_id) REFERENCES animal(animal_id),
    FOREIGN KEY(cuidador_id) REFERENCES cuidador(cuidador_id)
);