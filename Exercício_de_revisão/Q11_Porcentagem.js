const prompt = require('prompt-sync')();
/*11. Escreva uma função que dados 2 valores reais p e x calcule e retorne quanto vale p
por cento de x*/

function main() {
 
  const x = Number(prompt("Informe um número:")),
        p = Number(prompt("Valor da porcentagem:"));

  const Resultado = Porcentagem(p, x);

  console.log(`Resultado: ${Resultado}`);
}

main();

function Porcentagem(p, x) {
  return (p / 100) * x;
}