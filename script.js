function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function Calcular(peso, altura) {
    return peso / (altura* altura);
}

function calculateBMI() {
    let alturaInput = document.querySelector('#CM1').value;
    let pesoInput = document.querySelector('#KG1').value;

    // Convertendo os valores para números
    let altura = parseFloat(alturaInput);
    let peso = parseFloat(pesoInput);

    // Verificando se altura e peso são válidos
    if (isNaN(altura) || isNaN(peso)) {
        textoNaTela('#result', 'Por favor, insira valores válidos para altura e peso.');
        return;
    }

    let Resultado = Calcular(peso, altura);
    console.log (Resultado)

    if (Resultado < 16.9) {
        textoNaTela('#result', 'Você está muito abaixo do peso.');
    } else if (Resultado >= 17 && Resultado <= 18.4) {
        textoNaTela('#result', 'Você está abaixo do peso.');
    } else if (Resultado >= 18.5 && Resultado <= 24.9) {
        textoNaTela('#result', 'Você está no seu peso normal.');
    } else if (Resultado >= 25 && Resultado <= 29.9) {
        textoNaTela('#result', 'Você está acima do peso.');
    } else if (Resultado >= 30 && Resultado <= 34.9) {
        textoNaTela('#result', 'Você tem Obesidade grau 1.');
    } else if (Resultado >= 35 && Resultado <= 40) {
        textoNaTela('#result', 'Você tem Obesidade grau 2.');
    } else if (Resultado > 40) {
        textoNaTela('#result', 'Você tem Obesidade grau 3.');
    }
    
}