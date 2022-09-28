const readline = require('readline-sync');

const name = readline.question('Qual é o seu nome? ');

const idade = readline.question('Qual é a sua idade? ');

console.log(`Hello ${name}, you are ${idade} years old!`);