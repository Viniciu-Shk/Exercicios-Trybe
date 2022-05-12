// Desafio 1
function compareTrue(input1, input2) {
  if (input1 === true && input2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringUser) {
  let arrayRetorno = [];
  let palavra = '';
  for (let key in stringUser) {
    if (stringUser[key] !== ' ') {
      palavra += stringUser[key];
    } else {
      arrayRetorno.push(palavra);
      palavra = '';
    }
  }
  arrayRetorno.push(palavra);
  return arrayRetorno;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ',' + ' ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];
  let contador = 0;
  for (let key1 in arrayNumeros) {
    if (arrayNumeros[key1] > maiorNumero) {
      maiorNumero = arrayNumeros[key1];
    }
  }
  for (let key3 in arrayNumeros) {
    if (arrayNumeros[key3] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let arrayRetorno = [];
  for (let key in arrayNumeros) {
    if (arrayNumeros[key] % 3 === 0 && arrayNumeros[key] % 5 === 0) {
      arrayRetorno.push('fizzBuzz');
    } else if (arrayNumeros[key] % 3 === 0 && arrayNumeros[key] % 5 !== 0) {
      arrayRetorno.push('fizz');
    } else if (arrayNumeros[key] % 3 !== 0 && arrayNumeros[key] % 5 === 0) {
      arrayRetorno.push('buzz');
    } else {
      arrayRetorno.push('bug!');
    }
  }
  return arrayRetorno;
}

// Desafio 9
function encode(stringUser) {
  let stringRetorno = '';
  for (let key in stringUser) {
    if (stringUser[key] === 'a') {
      stringRetorno += '1';
    } else if (stringUser[key] === 'e') {
      stringRetorno += '2';
    } else if (stringUser[key] === 'i') {
      stringRetorno += '3';
    } else if (stringUser[key] === 'o') {
      stringRetorno += '4';
    } else if (stringUser[key] === 'u') {
      stringRetorno += '5';
    } else {
      stringRetorno += stringUser[key];
    }
  }
  return stringRetorno;
}
function decode(stringUser) {
  let stringRetorno = '';
  for (let key in stringUser) {
    if (stringUser[key] === '1') {
      stringRetorno += 'a';
    } else if (stringUser[key] === '2') {
      stringRetorno += 'e';
    } else if (stringUser[key] === '3') {
      stringRetorno += 'i';
    } else if (stringUser[key] === '4') {
      stringRetorno += 'o';
    } else if (stringUser[key] === '5') {
      stringRetorno += 'u';
    } else {
      stringRetorno += stringUser[key];
    }
  }
  return stringRetorno;
}

// Desafio 10
function techList(array, nome) {
  let arrayRetorno = [];
  array = array.sort();
  for (let key in array) {
    arrayRetorno.push({ tech: array[key], name: nome });
  }
  if (array.length === 0) {
    return 'Vazio!';
  }
  return arrayRetorno;
}

describe('Testes da função encode', () => {
  it('Testa se a função existe', () => {
    expect(typeof encode).toBe('function')
  });
  it('Testa se a função recebe parâmetros e devolve corretamente o return', () => {
    expect(encode('aeiou')).toEqual('12345')
  });
  it('Testa se a função recebe parâmetros e devolve corretamente o return', () => {
    expect(encode('bcdfghjklmnpqrstvxywz')).toEqual('bcdfghjklmnpqrstvxywz')
  });
  it('Testa se a função recebe parâmetros e devolve o mesmo tamanho de string', () => {
    expect(encode('aeiou').length).toEqual('12345'.length)
  });
});
describe('Testes da função decode', () => {
  it('Testa se a função existe', () => {
    expect(typeof encode).toBe('function')
  });
  it('Testa se a função recebe parâmetros e devolve corretamente o return', () => {
    expect(decode('12345')).toEqual('aeiou')
  });
  it('Testa se a função recebe parâmetros e devolve corretamente o return', () => {
    expect(decode('bcdfghjklmnpqrstvxywz')).toEqual('bcdfghjklmnpqrstvxywz')
  });
  it('Testa se a função recebe parâmetros e devolve o mesmo tamanho de string', () => {
    expect(decode('aeiou').length).toEqual('12345'.length)
  });
});
describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});