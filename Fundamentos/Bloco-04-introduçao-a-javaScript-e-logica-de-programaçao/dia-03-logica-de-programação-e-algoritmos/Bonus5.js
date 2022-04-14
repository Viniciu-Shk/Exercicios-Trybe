let n = 7;
let simbolo = "*";
let linhaConsole = " ";
let posicaoSimbolo = (n + 1) / 2;
let pirDir = posicaoSimbolo;
let pirEsq = posicaoSimbolo;

for(linha = 0; linha <= posicaoSimbolo; linha += 1) {
  for(coluna = 0; coluna <= n; coluna += 1) {
      if(coluna === pirEsq || coluna === pirDir || linha === posicaoSimbolo) {
          linhaConsole += simbolo;
      } else {
          linhaConsole += " ";
        }

    }
    console.log(linhaConsole);
    linhaConsole = " ";
    pirDir += 1;
    pirEsq -= 1;
}