function palindromo(name) {
    let inversor = [];
    for(let key = name.length - 1; key >= 0; key -= 1) {
        inversor.push(name[key]);
    }
    let nomeInvertido = inversor[0];
    for(let key = 1; key < inversor.length; key += 1) {
        nomeInvertido = nomeInvertido + inversor[key];
    }
    return nomeInvertido;  
}
let nome = "hannah";

if(palindromo(nome) === nome) {
    console.log("É um palíndromo");
} else {
    console.log("Não é um palíndromo");
}
