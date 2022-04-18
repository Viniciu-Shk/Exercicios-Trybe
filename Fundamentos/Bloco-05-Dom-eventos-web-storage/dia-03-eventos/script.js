const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};
function colocaDiaMes() {
    const mesDias = document.querySelector('#days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        const element = dezDaysList[index];
        const unidadeDiaMes = document.createElement('li');
        unidadeDiaMes.classList.add('day');
        if (dezDaysList[index] === 25) {
            unidadeDiaMes.classList.add('holiday', 'friday');
        } else if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
            unidadeDiaMes.classList.add('holiday');
        } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
            unidadeDiaMes.classList.add('friday');
        }
        unidadeDiaMes.innerHTML = element;
        mesDias.appendChild(unidadeDiaMes);
    }
}
function criaBotao(string) {
    const divBotao = document.querySelector('.buttons-container');
    const novoBotao = document.createElement('button');
    novoBotao.id = 'btn-holiday';
    novoBotao.innerText = string;
    divBotao.appendChild(novoBotao);
}
criaBotao('Feriados');
const botao = document.querySelector('#btn-holiday');
botao.addEventListener('click', mudaCorCalendario);
function mudaCorCalendario() {
    const dias = document.querySelectorAll('.day');
    for (let index = 0; index < dias.length; index += 1) {
        if (dias[index].classList.contains('holiday') && dias[index].style.backgroundColor !== 'red') {
            dias[index].style.backgroundColor = 'red';
        } else {
            dias[index].style.backgroundColor = 'rgb(238,238,238)';
        }
    }
}
createDaysOfTheWeek();
colocaDiaMes();



  // Escreva seu código abaixo.