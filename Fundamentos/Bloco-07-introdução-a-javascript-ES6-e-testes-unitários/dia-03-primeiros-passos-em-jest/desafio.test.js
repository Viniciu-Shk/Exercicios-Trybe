// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  const objRetorno = {};
  for (let key = 0; key < professionalBoard.length - 1; key += 1) {
    if (Object.values(professionalBoard[key]).includes(id)) {
      let index = 0;
      while (index < 3) {
        objRetorno[detail[index]] = professionalBoard[key][detail[index]];
        index += 1;
      }
    }
  }
  for (let key = 0; key < professionalBoard.length - 1; key += 1) {
    if (Object.values(professionalBoard[key]).includes(id)) {
      return objRetorno;
    }
  }
  return 'ID não indentidicada';
};


describe('Testes da function searchEmployee', () => {
  it('Teste se a função existe', () => {
    expect(typeof searchEmployee).toBe('function')
  });
  it('Teste se a busca por id e devolve especialidades', () => {
    expect(searchEmployee('8579-6', ['firstName', 'lastName', 'specialities'])).toEqual({firstName: 'Ana',
 lastName: 'Gates', specialities: ['UX', 'Design'], },)
  });
  it('Teste se a busca por id e devolve especialidades', () => {
    expect(searchEmployee('5569-4', ['firstName', 'lastName', 'specialities'])).toEqual({firstName: 'George', lastName: 'Jobs', specialities: ['Frontend', 'Redux', 'React', 'CSS'], },)
  });
  it('Teste se a busca por id e devolve especialidades', () => {
    expect(searchEmployee('9852-2-2', ['firstName', 'lastName', 'specialities'])).toEqual({firstName: 'Jeff', lastName: 'Cook', specialities: ['Ruby', 'SQL'], },)
  });
  it('Teste se a busca por id e devolve erro correto', () => {
    expect(searchEmployee('11111', ['firstName', 'lastName', 'specialities'])).toEqual('ID não indentidicada')
  });
});