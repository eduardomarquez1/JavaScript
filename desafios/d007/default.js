var valorDolar = prompt("Antes de mais nada. Qual a cotação do dólar hoje?");
var resultado = document.getElementById("resultado");

// FUNÇÃO PARA CONVERTER R$ EM US$
function converter() {
    let valorCarteira = prompt("Quantos R$ você tem na carteira?");

    let dolar = Number(valorDolar);
    let carteira = Number(valorCarteira);

    resultado.innerHTML = `<strong>Com R$${carteira}, você pode comprar...</strong>`;
    resultado.innerHTML += `<p>${(carteira/dolar).toFixed(2)}US$</p>`;
}