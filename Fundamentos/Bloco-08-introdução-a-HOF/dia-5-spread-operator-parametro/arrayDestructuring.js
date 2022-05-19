const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [stringSaudacao, funcSaudacao] = saudacoes;

funcSaudacao(stringSaudacao);

//2

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const novoArray = [comida, animal, bebida];
const [animalC, bebidaC, comidaC] = novoArray;

console.log(comidaC, animalC, bebidaC); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

//3

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [, , , par1, par2, par3, par4] = numerosPares;

numerosPares = [par1, par2, par3, par4];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo