let array = [2, 5, 5, 5, 8, 2, 3];
function maisRepete() {
    let numeroRep = 0;
    let contador1 = 0;
    for(let key1 = 0; key1 < array.length; key1 += 1) {
        let contador2 = 0;
        for(let key2 = 0; key2 < array.length; key2 += 1) {
            if (array[key2] === array[key1]) {
                contador2 += 1;
            }
        }
            if (contador2 > contador1) {
                contador1 = contador2;
                numeroRep = array[key1];
        }
    }
    return numeroRep;
}
console.log(maisRepete(array));