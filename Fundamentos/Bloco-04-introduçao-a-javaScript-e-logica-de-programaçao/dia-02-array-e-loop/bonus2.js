let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novaArray = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index !== numbers.length - 1) {
        let multiplicador = numbers[index] * numbers[index + 1];
        novaArray.push(multiplicador);
    } else {
        novaArray.push(numbers[index] * 2);
    }
}  
console.log(novaArray);