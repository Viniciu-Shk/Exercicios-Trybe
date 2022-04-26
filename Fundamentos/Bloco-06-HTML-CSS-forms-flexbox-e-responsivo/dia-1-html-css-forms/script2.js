let botaoEnviar = document.getElementById('btn-submit');
let inputNome = document.getElementById('nome-user');
let inputEmail = document.getElementById('email-user');
botaoEnviar.addEventListener('click', prevDef);
function prevDef(evento) {
    let valor1 = inputNome.value;
    let valor2 = inputEmail.value;
    if (10 < valor1.length && valor1.length< 40 && 10 < valor2.length && valor2.length< 50) {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
    } else {
        alert('Dados Inválidos');
    }
}