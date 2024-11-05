//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês

// quanto ganha por hora? Horas por mês?
var ganhoh = parseFloat(prompt("Quanto ganha por hora?"));
var horast = parseFloat(prompt("Quantas horas trabalha por mês?"));

//Calculo do salário total por mês:
var salariot = ganhoh * horast;

alert(" O seu slário toyal no mês é:" + salariot)