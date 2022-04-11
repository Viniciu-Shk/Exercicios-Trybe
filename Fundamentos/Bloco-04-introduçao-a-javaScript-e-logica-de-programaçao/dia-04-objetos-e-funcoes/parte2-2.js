let array = [2, 3, 6, 7, 10, 100];
function maiorValor(array) {
    let posMaiorNum = 0;
    for(let key1 in array) {
        for(let key2 in array) {
            if(array[key1] > array[key2]) {
                posMaiorNum = key1;
            } 
        }
    }
    return posMaiorNum;
}
console.log(maiorValor(array));