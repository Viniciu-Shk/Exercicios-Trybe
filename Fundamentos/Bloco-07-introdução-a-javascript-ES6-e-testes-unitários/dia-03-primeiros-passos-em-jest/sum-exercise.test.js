const sum = require('./sum-exercise');
describe('Teste da função sum com 2 valores', () => {
  it('Testa a soma dos numeros 4 e 5', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('Testa a soma dos numeros 0 e 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('Testa se a função lança um erro ao receber parametros 4 e "5"', () => {
    expect(() => sum(4, "5")).toThrow(Error);
  });
  it('Testa se a função lança um erro ao receber parametros 4 e "5", com a mensagem "parameters must be numbers"', () => {
    expect(() => sum(4, "5")).toThrow('parameters must be numbers');
  });
});