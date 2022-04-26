// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

INPUT_TEXT.addEventListener('click', default2);
INPUT_CHECKBOX.addEventListener('click', default2);
HREF_LINK.addEventListener('keypress', default3);
function default2(evento) {
    evento.preventDefault();
}
function default3(evento) {
    if (evento.key === 'a') {
        evento.preventDefault();
    }
}


