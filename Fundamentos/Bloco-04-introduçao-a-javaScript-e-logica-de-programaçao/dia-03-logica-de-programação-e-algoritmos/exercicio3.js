let array = ['java', 'javascript', 'python', 'html', 'css'];
let comparacaoMaior = [];
let comparacaoMenor = [];

for(index = 0; index < array.length; index += 1) {
    if(array[index].length > comparacaoMaior.length) {
        comparacaoMaior = array[index];
    } else {
        comparacaoMenor = array[index];
    }
}
for(index = 0; index < array.length; index += 1) {
    if(array[index].length < comparacaoMenor.length) {
        comparacaoMenor = array[index];
    }
}
console.log(comparacaoMaior);
console.log(comparacaoMenor);

// algorítimo pré código:
// declarar uma variavel de comparação
// abrir um for que itera o array
// condicional comparando o tamanho da palavra ao já armazenado
// utiliar o codigo do maior para encontrar menor comparando da mesma forma vs o maior
