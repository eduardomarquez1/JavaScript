// FUNCAO PARA CALCULAR O DESCONTO DE 10% EM UM PRODUTO
function CalcularDesconto() {

    // OBTENDO NOME E PRECO DO PRODUTO 
    let nomeProduto = prompt("Qual o produto que você está comprando?");
    let precoProduto = prompt(`Qual o preço do(a) ${nomeProduto}?`);

    // CALCULANDO O DESCONTO DE 10%
    let desconto = precoProduto * 0.10;
    let precoComDesconto = precoProduto - desconto;

    // EXIBINDO O RESULTADO NA TELA
    let resultado = document.getElementById("resultado");
    resultado.style.font = "normal 2rem Arial";
    resultado.innerHTML = `<strong>Calculando desconto de 10% para ${nomeProduto}</strong>`;
    resultado.innerHTML += `<p>O preço orginal era ${precoProduto}</p>`;
    resultado.innerHTML += `<p>Você acaba de ganhar ${desconto} de desconto (-10%)</p>`;
    resultado.innerHTML += `<p>No fim, você vai pagar ${precoComDesconto} no produto ${nomeProduto}</p>`;

}