const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let containerEvent = document.getElementsByClassName('container')[0];
containerEvent.addEventListener("click", adicionaClasse);
function adicionaClasse(elemento) {
    for(index = 0; index < document.getElementsByTagName('li').length; index += 1) {
        let lista = document.getElementsByTagName('li')[index];
        lista.classList.remove('tech');
        }
    elemento = elemento.target;
    elemento.classList.add('tech');
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
let eventoTexto = document.getElementById('input');
eventoTexto.addEventListener('change', trocaTexto)
function trocaTexto() {
    let provisorio = document.getElementsByClassName('tech')[0];
    provisorio.innerText = eventoTexto.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
let meuTop = document.getElementById('my-spotrybefy');
meuTop.addEventListener('dblclick', redireciona);
function redireciona(evento) {
    evento = evento.target;
    window.location.href = 'www.google.com';  
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
meuTop.addEventListener('mouseover', mudaCor);
function mudaCor() {
    meuTop.style.color ="#" + Math.floor(Math.random()*16777215).toString(16);
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.