const { expect } = require('chai');
const calculaNota = require('../../src/calculaSituacao');



describe('Quando a média for menor que 7', function () {
  it('retorna "reprovação"', function () {
    const resposta = calculaNota(4);
    expect(resposta).to.be.equals('reprovação');
  });
});