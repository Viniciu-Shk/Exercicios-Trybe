let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;
let mediaArt = null;

for (let sum = 0; sum < numbers.length; sum += 1) {
    somaTotal = somaTotal + numbers[sum]
}

mediaArt = somaTotal / numbers.length;

if ( mediaArt > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20")
}