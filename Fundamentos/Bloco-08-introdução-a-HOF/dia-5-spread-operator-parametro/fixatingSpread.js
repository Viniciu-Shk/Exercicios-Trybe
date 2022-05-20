// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'pera', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de laranja', 'mel', 'hortelã'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens]

console.log(fruitSalad(specialFruit, additionalItens));