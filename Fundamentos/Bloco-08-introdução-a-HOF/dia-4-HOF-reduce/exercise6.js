const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
// Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. 
const newList = []
const sumGrades = (acc, curr) => acc + curr;
const makeObject = (alunos) => alunos.map((aluno) => {
  const subList = {}
  subList.name = aluno;
  subList.average = parseFloat(grades[alunos.indexOf(aluno)].reduce(sumGrades, 0) / grades[alunos.indexOf(aluno)].length);
  newList.push(subList);
})
makeObject(students);
console.log(newList);
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];