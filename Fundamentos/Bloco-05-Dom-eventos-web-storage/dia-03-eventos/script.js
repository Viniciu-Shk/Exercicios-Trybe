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
function criaBotaoSexta(string) {
    const divBotao = document.querySelector('.buttons-container');
    const novoBotao = document.createElement('button');
    novoBotao.id = 'btn-friday';
    novoBotao.innerText = string;
    divBotao.appendChild(novoBotao);
}
createDaysOfTheWeek();
colocaDiaMes();
criaBotaoSexta('Sexta-feira');
const botaoSexta = document.querySelector('#btn-friday');
botaoSexta.addEventListener('click', mudaTextoCalendario);
function mudaTextoCalendario() {
    const dias = document.querySelectorAll('.day');
    for (let index = 0; index < dias.length; index += 1) {
        if (dias[index].classList.contains('friday') && dias[index].innerHTML !== 'Sexta-Feira') {
            dias[index].innerHTML = 'Sexta-Feira';
        } else {
            dias[index].innerHTML = dezDaysList[index];
        }
    }
}
const dias2 = document.querySelectorAll('.day');
for (let key = 0; key < dias2.length; key += 1) {
    dias2[key].addEventListener('mouseover', zoom);
    dias2[key].addEventListener('mouseout', tiraZoom);
}

function zoom(elemento) {
    elemento = elemento.target;
    elemento.style.fontSize = 2 + 'em';
}
function tiraZoom(elemento) {
    elemento = elemento.target;
    elemento.style.fontSize = 1 + 'em';
}
function criaTarefa(string) {
    let tarefa = document.createElement('span');
    tarefa.innerText = string;
    let pai = document.querySelector('.my-tasks');
    pai.appendChild(tarefa);
}
criaTarefa('Cozinhar');
function criaLegenda(string) {
    let tarefa = document.createElement('div');
    tarefa.style.backgroundColor = string;
    let pai = document.querySelector('.my-tasks');
    pai.appendChild(tarefa);
}
criaLegenda('red');
  // Escreva seu código abaixo