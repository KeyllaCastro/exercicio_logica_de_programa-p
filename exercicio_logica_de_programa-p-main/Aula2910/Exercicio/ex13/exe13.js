    //Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
    //a) Para homens: (72.7*h) - 58
    //b) Para mulheres: (62.1*h) - 44.7 (h = altura)
    //c) Peça o peso da pessoa e informe se ela está dentro, acima ou abaixo do peso.

// Entrada de dados
var altura = parseFloat(prompt("Qual a sua altura?"));
var sexo = prompt("Qual é seu Sexo, Feminino ou Masculino?");
var pesoP = parseFloat(prompt("Qual é o seu peso?"));
var pesoIdeal;

// Cálculo do peso ideal
if (sexo === "Masculino") {
    pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === "Feminino") {
    pesoIdeal = (62.1 * altura) - 44.7;
}

// Peso ideal
console.log("Seu peso ideal calculado para sua altura é: " + pesoIdeal + " kg");

// Como está a situação? Está dentro, acima ou abaixo do peso?
if (pesoP < pesoIdeal) {
    alert("Você está abaixo do peso.");
} else if (pesoP === pesoIdeal) {
    alert("Você está no peso ideal.");
} else {
    alert("Você está acima do peso.");
}


