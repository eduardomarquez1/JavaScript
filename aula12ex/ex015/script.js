function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value)> ano) {
        alert('[Erro] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        res.style.textAlign = 'center'
        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            }else if (idade < 21) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
            }else if (idade < 50) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
            }else if (idade < 120) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
            }
        }else if (fsex [1].checked) {
             genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            }else if (idade < 21) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
            }else if (idade < 50) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
            }else if (idade < 120) {
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
            }
        } 
    }
}