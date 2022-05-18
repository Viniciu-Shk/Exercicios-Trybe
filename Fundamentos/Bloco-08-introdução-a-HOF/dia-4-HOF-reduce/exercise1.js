const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
const retiraElements = (acc, elemento) => elemento;
const flatten = (array) => array.map((elemento) => elemento.reduce(retiraElements));
console.log(flatten(arrays));