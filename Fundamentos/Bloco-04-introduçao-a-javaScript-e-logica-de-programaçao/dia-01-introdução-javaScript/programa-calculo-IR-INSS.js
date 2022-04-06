const salarioBruto = 3000;
let INSS = null;
let IR = null;
let salarioBase = null;
let salarioLiquido = null;

if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 0.08;
    salarioBase = salarioBruto - INSS;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    INSS = salarioBruto * 0.09;
    salarioBase = salarioBruto - INSS;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    INSS = salarioBruto * 0.11;
    salarioBase = salarioBruto - INSS;
} else {
    INSS = 570.88;
    salarioBase = salarioBruto - INSS;
}

if (salarioBase <= 1903.98) {
    IR = 0;
    salarioLiquido = salarioBase - IR;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    IR = salarioBase * 0.075 - 142.8;
    salarioLiquido = salarioBase - IR;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    IR = salarioBase * 0.015 - 354.8;
    salarioLiquido = salarioBase - IR;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    IR = salarioBase * 0.0225 - 636.13;
    salarioLiquido = salarioBase - IR;
} else {
    IR = salarioBase * 0.0275 - 869.36;
    salarioLiquido = salarioBase - IR;
}
console.log("Seu salário líquido é de:");
console.log(salarioLiquido);
console.log("Seu valor do INSS foi de:");
console.log(INSS);
console.log("Seu valor do IR foi de:");
console.log(IR);