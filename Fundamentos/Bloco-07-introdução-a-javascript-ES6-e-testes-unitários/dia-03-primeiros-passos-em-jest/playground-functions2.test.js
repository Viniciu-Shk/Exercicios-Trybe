// Desafio 11
function repeticao(array, numero) {
  let contador = 0;
  for (let key in array) {
    if (array[key] === numero) {
      contador += 1;
    }
  }
  return contador;
}
function generatePhoneNumber(array) {
  let telefone = '';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let key in array) {
    if (repeticao(array, array[key]) >= 3 || array[key] < 0 || array[key] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } if (key === '0') {
      telefone += '(' + array[key];
    } else if (key === '1') {
      telefone += array[key] + ') ';
    } else if (key === '6') {
      telefone += array[key] + '-';
    } else {
      telefone += array[key];
    }
  }
  return telefone;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineB - lineA)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(stringBebidas) {
  let contadorAgua = 0;
  for (let key in stringBebidas) {
    switch (stringBebidas[key]) {
    case '1':
      contadorAgua += 1;
      break;
    case '2':
      contadorAgua += 2;
      break;
    case '3':
      contadorAgua += 3;
      break;
    case '4':
      contadorAgua += 4;
      break;
    case '5':
      contadorAgua += 5;
      break;
    case '6':
      contadorAgua += 6;
      break;
    case '7':
      contadorAgua += 7;
      break;
    case '8':
      contadorAgua += 8;
      break;
    case '9':
      contadorAgua += 9;
      break;

    default:
      break;
    }
  }
  if (contadorAgua === 1) {
    return contadorAgua + ' copo de água';
  }
  return contadorAgua + ' copos de água';
}

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});