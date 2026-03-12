let num = document.getElementById('inputNum') // Receberá valores digitados pelo usuário 
let selNum = document.getElementById('selNumero') // Exibirá os valores de dentro da Array
let res = document.getElementById('res')
let valores = [] // Armazena os números digitados pelo usuário

function adicionar(){
    // Evita Null, números menores que 1 ou maiores que 100
    if (num.value.length == 0 || Number(num.value)<1 || Number(num.value)>100){
        alert('Valor inválido ou já encontrado na lista.')

    // Evita que o mesmo número seja adicionado mais de uma vez
    } else if (valores.indexOf(Number(num.value)) != -1){
        alert('Valor inválido ou já encontrado na lista.')

    // Faz com que os valores recebidos na Variável "num" sejam armazenados na Array "valores"
    } else {
        valores.push(Number(num.value)) // Adiciona "num" no fim da Array
        let item = document.createElement('option') // Cria a variável "item" um elemento do tipo option 
        item.text = `Valor ${num.value} adicionado` // Altera o texto de item
        selNum.appendChild(item) // Adiciona item como um filho de selNum
        res.innerHTML = ``
    };
    num.value = ''
    num.focus()
};

function finalizar(){
    // Evita que finalize sem que haja um valor armazenado
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let valor = 0; valor < valores.length; valor++){
            // Soma todos os elementos da Array
            soma += valores[valor]
            // Define qual o maior elemento da Array
            if (valores[valor] > maior){
                maior = valores[valor]
            }
            // Define qual o menor elemento da Array
            if (valores[valor] < menor){
                menor = valores[valor]
            }
        }
        // Calcula a media dos elementos da Array
        media = soma / total
        
        // Exibe todos os resultados na página
        res.style.fontSize = '13pt'
        res.innerHTML = `<p> Ao todo, temos ${total} números cadastrados </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma} </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media} </p>`
    };
};