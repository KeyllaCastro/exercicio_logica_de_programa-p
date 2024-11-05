//Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
//Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
//Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

// Tamanho da área. 
area = parseFloat(prompt("Qual o tamanho da área a ser pintada em metros quadrados:"));
// 1 litro cobre 3 m²
coberturaPL = 3; 
 // lata 18 litros
litrosPL = 18;    
// Preço de cada 
precoPL = 80;   

// quantidade de tinta necessária
litrosN = area / coberturaPL;

// a quantidade de latas necessárias 
var latasN = (litrosN / 18); 
if (latasN % 1 !== 0) { 
    latasN = (latasN) + 1; 
} else {
    latasNec = (latasN);
}

// o preço total
precoTotal = latasN * precoPL;

// Exibir o resultado
alert("Latas necessárias:"+ latasN);
alert("Preço total: R$ " + precoTotal);