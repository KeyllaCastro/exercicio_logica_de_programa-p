//João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
//Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) 
//deve pagar uma multa de R$ 4,00 por quilo excedente. 
//João precisa que você faça um programa que leia a variável peso (peso de peixes) e verifique se há excesso.
//Se houver, gravar na variável excesso e na variável multa o valor da multa que João deverá pagar.
//Caso contrário mostrar tais variáveis com o conteúdo ZERO.

//Peso dos peixes
var peso = parseFloat(prompt("Em kg digite o peso dos peixes:"));

// Limite de peso permitido (50 quilos)
var limite = 50;
var excesso = 0;
var multa = 0;

// Verifica  o limite
if (peso > limite) {
    // Calculo do excesso e a multa
    excesso = peso - limite;
    multa = excesso * 4; }

// Resultado
alert("Excesso: " + excesso + " kg");
alert("Multa: R$ " + multa);