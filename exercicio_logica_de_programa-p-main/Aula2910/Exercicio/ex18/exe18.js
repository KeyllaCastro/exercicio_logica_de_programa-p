// Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), 
// calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

tamanhoArq = parseFloat(prompt("Qual o tamanho do arquivo?")); 
velocidadeLink = parseFloat(prompt("Qual a velocidade de um link de Internet (em Mbps)?"));;   

// Calcular o tempo de download em segundos
tempoS = tamanhoArq / velocidadeLink;

// Converter para minutos
tempoM = tempoS / 60;

// Resultado esultado
alert("Tempo de download: " + tempoM + " minutos");