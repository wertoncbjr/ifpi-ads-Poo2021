const prompt = require('prompt-sync')();
/*3. Escrever um programa que leia três valores inteiros e apresente o menor dos valores
lidos.*/
console.log("Bem vindo!!");

const Num01 = Number(prompt('insira o Valor 01: '))
const Num02 = Number(prompt('insira o Valor 02: '))
const Num03 = Number(prompt('insira o Valor 03: '))

if (Num01<Num02 && Num01<Num03) {
    console.log(`Valor 01 é o menor`)
}
else if (Num02<Num01 && Num02<Num03) {
    console.log(`Valor 02 é o menor`)
}
else if (Num02<Num01 && Num03<Num02) {
    console.log(`Valor 03 é o menor`)
}