//Lembrar de capturar o retorno da func de 1a classe!!
const newEmployees = (action) => {
  let pessoas = {
    id1: action('Pedro Guerra'),
    id2: action('Patati Patata'),
    id3: action('Maria Do Carmo'),
  };
  return pessoas;
}
const cadastro = (name) => {
  const newName = name.replace(/ /g, '_');
  const employees = {
    nome: name,
    email: `${newName}@trybe.com`,
  };
  return employees;
};
console.log(newEmployees(cadastro));

//Exercicio 2

const verificacao = (aposta, sorteio) => (aposta === sorteio) ? console.log('Parabéns você ganhou!') : console.log('Tente novamente');
const resultado = (callback, aposta) => {
  let sorteio = parseInt(Math.random() * 5);
  return callback(aposta, sorteio)
}

resultado(verificacao, 2);

//Exercicio 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const hof = (gabarito, respostas, callback) => console.log(callback(gabarito, respostas));
const correcao = (gabarito, respostas) => {
  let nota = 0;
  for (let key =0; key < gabarito.length; key += 1) {
    if (gabarito[key] === respostas[key]) {
      nota += 1;
    } else if (gabarito[key] !== respostas[key] && respostas[key] !== 'N.A') {
      nota = parseFloat(nota - 0.5);
    }
  }
  return nota;
}
hof(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao);