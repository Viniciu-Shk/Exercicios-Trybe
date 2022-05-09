const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//1
const modObj = (objeto, chave, valor) => objeto[chave] = valor;
modObj(lesson2, 'turno', 'noite');
//2
const listaKeys = (objeto) => Object.keys(lesson2);
// console.log(listaKeys(lesson2));
//3
const tamanhoObj = (objeto) => Object.keys(objeto).length;
// console.log(tamanhoObj(lesson2));
//4
const valoresObj = (objeto) => Object.values(objeto);
// console.log(valoresObj(lesson2));
//5
const allLessons = {
  lesson1: {

  },
  lesson2: {

  },
  lesson3: {

  }
}
Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);
// console.log(allLessons);
//6
const totalAlunos = (obj) => `O total de alunos é: ${Object.values(obj.lesson1)[1] + Object.values(obj.lesson2)[1] + Object.values(obj.lesson3)[1]}`;
// console.log(totalAlunos(allLessons));
//7
const getValueByPosition = (objeto, posicao) => Object.values(objeto)[posicao];
// console.log(getValueByPosition(lesson2, 0));
//8
const verifyPair = (objeto, chave, valor) => {
  if (!Object.keys(objeto).includes(chave) || !Object.values(objeto).includes(valor)) {
    return false;
  } else {
      return true;
  }
}
// console.log(verifyPair(lesson3, 'materia', 'Matemática'));
//Bonus 1
const contaAlunos = (objeto, chave, valor) => {
  let contador = 0;
  let index = 0;
  while (index < 3) {
    if (verifyPair(Object.values(objeto)[index], chave, valor)) 
      contador += Object.values(objeto)[index].numeroEstudantes;
      index += 1;
    }
  return contador;
}
console.log(contaAlunos(allLessons, 'materia', 'Matemática'));
// Bonus 2
const createReport = (objeto, prof) => {
  const aulasDadas = [];
  const report = {};
  report.professor = prof;
  let index = 0;
  while (index < 3) {
    if (Object.values(objeto)[index].professor === prof)
      aulasDadas.push(Object.values(objeto)[index].materia)
      index += 1;
  }
  report.aulasDadas = aulasDadas;
  report.numeroEstudantes = contaAlunos(allLessons, 'professor', prof);
  return report;
}
console.log(createReport(allLessons, 'Carlos'));