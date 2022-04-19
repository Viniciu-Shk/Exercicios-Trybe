const button = document.getElementById('botao-input');
const input = document.getElementById('frase-input');
let contadorImplementa = 0;
button.addEventListener('click', implementa);
function implementa() {
    if(contadorImplementa === 0) {
        let inputUser = input.value;
        localStorage.setItem('bgc', inputUser);
        contadorImplementa += 1;
        document.body.style.backgroundColor = inputUser;
    } else if(contadorImplementa === 1) {
        let inputUser = input.value;
        localStorage.setItem('textc', inputUser);
        contadorImplementa += 1;
        document.body.style.color = inputUser;
    } else if(contadorImplementa === 2) {
        let inputUser = input.value;
        localStorage.setItem('textsz', inputUser);
        contadorImplementa += 1;
        document.body.style.fontSize = inputUser + 'px';
    } else if(contadorImplementa === 3) {
        let inputUser = input.value;
        localStorage.setItem('textspc', inputUser);
        contadorImplementa += 1;
        document.body.style.lineHeight = inputUser + 'px';
    } else {
        let inputUser = input.value;
        localStorage.setItem('font', inputUser);
        contadorImplementa += 1;
        document.body.style.fontFamily = inputUser;
    }
}
window.onload = function () {
    document.body.style.backgroundColor = localStorage.getItem('bgc');
    document.body.style.color = localStorage.getItem('textc');
    document.body.style.fontSize = parseInt(localStorage.getItem('textsz')) + 'px';
    document.body.style.lineHeight = parseInt(localStorage.getItem('textspc')) + 'px';
    document.body.style.fontFamily = localStorage.getItem('font');
}