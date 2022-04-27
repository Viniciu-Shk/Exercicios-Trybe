let botaoEnviar = document.getElementById('btn-submit');
let inputNome = document.getElementById('nome-user');
let inputEmail = document.getElementById('email-user');
let dataViagem = document.getElementById('data-viagem');
function prevDef(evento) {
  let valor1 = inputNome.value;
  let valor2 = inputEmail.value;
    if (10 < valor1.length && valor1.length< 40 && 10 < valor2.length && valor2.length< 50) {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
    } else {
      alert('Dados Inválidos');
    }
}
botaoEnviar.addEventListener('click', prevDef);
// let picker = new Pikaday({ field: $('#data-viagem')[0],
//   format: 'D MMM YYYY',
// });
let picker = document.getElementById('data-viagem').DatePickerX.init();