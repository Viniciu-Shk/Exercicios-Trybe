const botao = document.getElementsByTagName('button')[0];
const p = document.getElementsByTagName('p')[0];
let contador = 0;
const contaClique = evento => {contador += 1; p.innerHTML = contador;}
botao.addEventListener('click', contaClique);