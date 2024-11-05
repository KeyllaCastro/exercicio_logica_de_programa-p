//Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
//Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, 
//que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
//Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
//• comprar apenas latas de 18 litros;
//• comprar apenas galões de 3,6 litros;
//• misturar latas e galões, de forma que o preço seja o menor. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.

// Solicita ao usuário o tamanho da área a ser pintada
area = parseFloat(prompt("Qual o tamanho da área a ser pintada (em metros quadrados)?"));

// A cobertura da tinta é de 1 litro para 3 metros quadrados
 litrosNec = area/3;

// Quantidade de latas necessárias (cada lata tem 18 litros)
 latasNec = litrosNec / 18;

// Verifica se a quantidade de latas é um número inteiro. Se não for, adiciona uma lata extra
if (latasNec % 1 != 0) {
    latasNec = parseInt(latasNec) + 1;
} else {
    latasNec = parseInt(latasNec);
}

// Preço de cada lata de tinta
precoLata = 80;

// Calcula o preço total
precoTotal = latasNec * precoLata;

// Exibe os resultados para o usuário
alert("Será necessário comprar " + latasNec + " lata(s) de tinta.");
alert("O valor total será R$ " + precoTotal + ".");

