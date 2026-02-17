function troco() {
    var produto = prompt('Que produo você está comprando?');
    var preco = Number(prompt(`Quanto custa o ${produto} que você está comprando?`));
    var dinheiroDisponivel = Number(prompt(`Qual foi o valor que voê deu para pagar ${produto}? `));
    var troco = dinheiroDisponivel - preco;
    alert(`Você comprou ${produto} que custou ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.\nDeu ${dinheiroDisponivel.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de troco.\nVolte sempre!`)
}