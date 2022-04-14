let word = 'bananaoca';
let inverso = [];
for(let index = word.length - 1; index >= 0; index -= 1) {
    inverso.push(word[index]);
}
console.log(inverso);