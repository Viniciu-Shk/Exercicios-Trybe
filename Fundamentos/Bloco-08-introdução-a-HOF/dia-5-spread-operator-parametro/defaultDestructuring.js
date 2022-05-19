// const personTeste = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationalityTeste = 'Paraense'} = personTeste;

// console.log(nationalityTeste);

//1 - Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
const {nationality = 'Brazilian'} = person;
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));