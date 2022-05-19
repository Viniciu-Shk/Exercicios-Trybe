//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos

const sum = (...numeros) => numeros.reduce((acc, curr) => acc + curr);

console.log(sum(1, 2, 3, 5, 100));