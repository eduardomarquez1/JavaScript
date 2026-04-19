function converter() {
    let res = document.getElementById('res');
    let metros = Number(prompt('Digite a distância em metros:'));
    res.innerHTML = `<p>A distância de ${metros} metros corresponde a:</p>`;
    res.innerHTML += `<p>${(metros / 1000).toFixed(3).replace('.', ',')} quilômetros (Km)</p>`;
    res.innerHTML += `<p>${(metros / 100).toFixed(3).replace('.', ',')} hectômetros (Hm)</p>`;
    res.innerHTML += `<p>${(metros / 10).toFixed(3).replace('.', ',')} decâmetros (Dam)</p>`;
    res.innerHTML += `<p>${(metros * 10).toFixed(3).replace('.', ',')} decímetros (dm)</p>`;
    res.innerHTML += `<p>${(metros * 100).toFixed(3).replace('.', ',')} centímetros (cm)</p>`;
    res.innerHTML += `<p>${(metros * 1000).toFixed(3).replace('.', ',')} milímetros (mm)</p>`;
}