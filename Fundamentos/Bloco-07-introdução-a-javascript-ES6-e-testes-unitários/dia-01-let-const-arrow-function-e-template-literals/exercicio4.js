let arrayGlobal = ['HTML', 'CSS', 'JavaScript', 'Node', 'React'];

const trocaX = (string, subs) => {
  let arrayed= string.split(' ');
  arrayed.splice(arrayed.indexOf('x'), 1, subs);
  return arrayed.join(' ');
}
trocaX("Tryber x aqui!", "Rodrigo")

const concatena = (string1, string2) => console.log(`${string1}

Minhas cinco principais habilidades são: ${string2.sort()}.

#goTrybe`)
concatena(trocaX("Tryber x aqui!", "Rodrigo"), arrayGlobal);