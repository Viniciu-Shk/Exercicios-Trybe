let n = 5;
let simbolo = "*";
let linhaConsole = " ";
let posicaoSimbolo = n;

for(linha = 0; linha <= n; linha += 1) {
  for(coluna = 0; coluna <= n; coluna += 1) {
      if(coluna < posicaoSimbolo) {
          linhaConsole += " "
      } else {
          linhaConsole += simbolo
      }
  }
  console.log(linhaConsole);
  linhaConsole = " ";
  posicaoSimbolo -= 1;
}