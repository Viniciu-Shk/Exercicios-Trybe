const myRemove = require('./myRemove');
describe('Teste da function myRemove', () => {
  it('Teste para ([1,2,3,4], 3)', () => {
    expect(myRemove([1 ,2 ,3 ,4], 3)).toEqual([1, 2, 4]);
  });
  it('Teste para ([1,2,3,4], 3)', () => {
    expect(myRemove([1 ,2 ,3 ,4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Teste para ([1,2,3,4], 5)', () => {
    expect(myRemove([1 ,2 ,3 ,4], 5)).toEqual([1, 2, 3, 4]);
  });
});