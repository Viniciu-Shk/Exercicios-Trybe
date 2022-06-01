const uppercase = require("./exercise7");

describe('Teste para funções assíncronas', () => {
  it('Testando se a função assíncrona retorna o esperado', (done) => {
    const expected = uppercase('um teste', console.log);
    try {
      expect(expected).toBe(console.log('UM TESTE'));
      done();
    } catch (error) {
      done(error);
    }
  });
});