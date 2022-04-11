let array = [2, 3, 1, 7, 10, 100];
function menorValor(array) {
    let posMenorNum = 0;
    for(let key1 = array.length - 1; key1 >= 0 ; key1 -= 1) {
        for(let key2 = array.length - 1; key2 >= 0 ; key2 -= 1) {
            if(array[key1] > array[key2]) {
                posMenorNum = key2;
            }
        }
    }
    return posMenorNum;
}
console.log(menorValor(array));