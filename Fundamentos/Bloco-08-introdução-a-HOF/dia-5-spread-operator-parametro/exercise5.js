//Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só

let array = [1, 2, 3];
const [par1, par2, par3] = array;
const swap = (anArray) => anArray = [par3, par2, par1];
swap(array);
console.log(swap(array));