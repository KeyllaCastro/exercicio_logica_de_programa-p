//Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
//a) o produto do dobro do primeiro com metade do segundo.
//b) a soma do triplo do primeiro com o terceiro.
//c) o terceiro elevado ao cubo.

var primeiroN = parseInt(prompt("A)Fale o primeiro número inteiro:"));
var segundoN = parseInt(prompt("B)Fale o segundo número inteiro:"));
var terceiroN = parseFloat(prompt("C)Fale o terceiro número real:"));

resA = (2 * primeiroN) * (segundoN / 2);
resB = (3 * primeiroN) + terceiroN;
resC = (terceiroN * terceiroN * terceiroN);

alert(" O calculo da alternativa A)"+ resA);
alert("O calculo da alternativa B)"+ resB);
alert("O calculo da alternativa C)"+ resC);