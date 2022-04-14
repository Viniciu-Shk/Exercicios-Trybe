let array = ['José', 'Lucassssssssssssss', 'Nádia', 'Fernanda', 'Cairoaaaaa', 'Joana'];
function maiorNome(array) {
    let nome = array[0];
    for(let key1 in array) {
    if (array[key1].length > nome.length) {
        nome = array[key1];
    }
    }
    return nome;
}
console.log(maiorNome(array));