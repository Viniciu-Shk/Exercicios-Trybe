// Exercicio 1 do Course
// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);
let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
const testingScope = escopo => (escopo === true) ? `${ifScope} ótimo, fui utilizada no escopo !` : `${elseScope}`;

console.log(testingScope(false));

// Exercicio 2 do Course - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaArray = array => array.sort((a, b) => a - b);

console.log(`Os numeros ${ordenaArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);

//Parte 2 - Crie uma função que receba um número e retorne seu fatorial.
let resultado = 1;
const fatorial = numero => {
  while (numero > 1) {
    resultado *= numero;
    numero -= 1;
  }
  return console.log(resultado);
}

fatorial(4);

//Parte 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = string => console.log(string.split(' ').sort((a, b) => a.length - b.length)[string.split(' ').length - 1]);
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');