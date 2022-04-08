let maiorPrimo = 0;

for(index =1; index <= 50; index += 1) {
    if(Math.ceil(index % 2) !== 0 && Math.ceil(index % 3) !== 0 && Math.ceil(index % 5) !== 0 && Math.ceil(index % 7) !== 0 && Math.ceil(index % 11) !== 0) {
        maiorPrimo = index;
    } else {
        console.log("O número " + index + " não é primo!")
    }
}
console.log("O maior número primo é : " + maiorPrimo);