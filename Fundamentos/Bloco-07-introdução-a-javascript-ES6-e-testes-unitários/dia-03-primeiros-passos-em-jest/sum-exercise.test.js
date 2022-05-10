const sum = require('./sum-exercise');
describe('Teste da função sum com 2 valores', () => {
  it('Testa a soma dos numeros 4 e 5', () => {
    expect(sum(4, 5)).toEqual(9);
  }) 
});