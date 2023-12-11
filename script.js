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

mostra(nome + ", o seu IMC é " + imc);

if(imc < 18.5){
    mostra(nome + ", você está abaixo do recomendado");
}else if(imc > 35){
    mostra(nome + ", você está acima do recomendado");
}else if(imc >= 18.5 && imc <= 35){
    mostra(nome + " seu IMC está excelente!");
}