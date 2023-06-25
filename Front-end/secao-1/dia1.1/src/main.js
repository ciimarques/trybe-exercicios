import validator from "validator";
const campoDeTexto = document.querySelector('#campo');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');
button.addEventListener('click', (event) => {
  event.preventDefault();
  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    hexColor: validator.isHexColor(campoDeTexto.value),
    email: validator.isEmail(campoDeTexto.value),
    url: validator.isURL(campoDeTexto.value),
  }
  textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`
});