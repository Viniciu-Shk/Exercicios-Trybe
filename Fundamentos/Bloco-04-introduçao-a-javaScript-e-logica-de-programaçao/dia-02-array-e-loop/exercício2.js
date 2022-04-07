let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;

for (let sum = 0; sum < numbers.length; sum += 1) {
    somaTotal = somaTotal + numbers[sum]
}

console.log(somaTotal);