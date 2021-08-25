const prompt = require('prompt-sync')();
/*2. Escreva um programa para converter de dólar para real e exibir para o usuário a
resposta final.*/
console.log("Bem vindo!!");

const Dolares = Number(prompt('insira quantos Dolares Voce quer converter: '))
const DolarHoje = Number(prompt('insira o valor de um dolar em reais: '))

const Real = DolarHoje*Dolares

console.log(`||Um dolar valer : ${DolarHoje} R$
||Quantidade de Dolares que voce quer converter : ${Dolares} $
||Dolar convertido para reais : ${Real} R$`) 