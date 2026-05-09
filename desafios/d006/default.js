function converter() {

    let resultado = document.getElementById("resultado");
    let obterValor = Number(prompt("Digite uma temperatura em °C (Celsius)"));

    let converterFahrenheit = (obterValor * 9 / 5) + 32;
    let converterKelvin = obterValor + 273.15;

    resultado.innerHTML = `<strong>A temperatura de ${obterValor}°C, corresponde a...</strong>`;
    resultado.innerHTML += `<p> ${converterKelvin}°K (Kelvin) </p>`;
    resultado.innerHTML += `<p> ${converterFahrenheit}°F (Fahrenheit) </p>`;

}