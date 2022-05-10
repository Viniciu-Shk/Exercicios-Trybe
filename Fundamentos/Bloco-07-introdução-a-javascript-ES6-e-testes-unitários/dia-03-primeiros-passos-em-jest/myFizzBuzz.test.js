function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
describe('Testes da funciton myFizzBuzz', () => {
  it('Teste com numero divisível por 3 e por 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz')
  });
  it('Teste com numero divisível por 3 somente', () => {
    expect(myFizzBuzz(12)).toEqual('fizz')
  });
  it('Teste com numero divisível por 5 somente', () => {
    expect(myFizzBuzz(10)).toEqual('buzz')
  });
  it('Teste com numero não divisível por 3 nem por 5', () => {
    expect(myFizzBuzz(11)).toEqual(11)
  });
  it('Teste com parâmetro !== number', () => {
    expect(myFizzBuzz('15')).toEqual(false)
  });
})