//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 

valorHora = parseFloat(prompt("Digite você ganha por hora (em R$)?"));
horasTrabalhadas = parseFloat(prompt("Digite as horas você trabalhou no mês?"));

// Salário bruto
salarioB = valorHora * horasTrabalhadas;

//Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
//a. salário bruto. b. quanto pagou ao INSS. c. quanto pagou ao sindicato.  d. o salário líquido. e. calcule os descontos e o salário líquido, conforme a tabela abaixo:
   //+ Salário Bruto : R$ - IR (11%) : R$ - INSS
   //(8%) : R$ : - Sindicato (5%) R$ = Salário
   //Liquido: R$
//Obs.: Salário Bruto - Descontos = Salário Líquido.

// descontos
desIR = sBruto * 0.11;  //Imposto de Renda
desINSS = sBruto * 0.08;  // INSS
desSindicato = sBruto * 0.05;  //Sindicato

//salário líquido
salarioL = salarioB- desIR - desINSS - desSindicato;

// Exibindo os resultados
alert("Salário Bruto: R$ " + sBruto);
alert("Desconto Imposto de Renda (11%): R$ " + desIR);
alert("Desconto INSS (8%): R$ " + desINSS);
alert("Desconto Sindicato (5%): R$ " + desSindicato);
alert("Salário Líquido: R$ " + salarioL);
