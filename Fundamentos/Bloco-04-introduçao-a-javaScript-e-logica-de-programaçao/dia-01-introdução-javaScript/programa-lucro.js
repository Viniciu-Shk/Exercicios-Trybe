const custo = 10;
const precoVenda = 15;
let lucro = null;
let quantiaUnidades = -50;

if (quantiaUnidades > 0) {
    lucro = precoVenda * quantiaUnidades - custo * 1.2 * quantiaUnidades;
    console.log(lucro);
} else {
    console.log("Erro, valores devem ser positivos!")
}