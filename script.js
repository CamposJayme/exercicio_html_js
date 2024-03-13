const campo1 = document.getElementById('numero-a');
const campo2 = document.getElementById('numero-b');
const form = document.querySelector('form');
const retorno = document.querySelector('.resultado');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (campo2.value > campo1.value) {
        retorno.innerHTML += `<p>${campo2.value} (Campo B) É MAIOR que o ${campo1.value} (Campo A).</p>`;
    } else {
        retorno.innerHTML += `<p>${campo2.value} (Campo B) NÃO É MAIOR que o ${campo1.value} (Campo A).</p>`;
    }
})