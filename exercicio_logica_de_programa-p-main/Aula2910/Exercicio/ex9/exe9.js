//Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius // C = (5 * (F-32) / 9).

//Temperatura f
var tempF = parseInt(prompt("Qual é a temperatura em graus Fahrenheit? "));
//Conversor para c
var tempC = (5 * (tempF - 32) / 9);
//Resultado

alert("A temperatura em graus Celsius é: " + tempC);