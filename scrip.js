function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura){
    return peso/(altura*altura);;
}

let nome = prompt("Informe o seu nome");
let alturaInformada = prompt(nome + ", informe seu peso");
let pesoInformado = prompt(nome + ", informe sua altura");

let imc = calculaImc(alturaInformada, pesoInformado);

document.write(nome + ", o seu IMC é " + imc);