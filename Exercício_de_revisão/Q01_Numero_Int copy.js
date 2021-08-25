const prompt = require('prompt-sync')();

/* 1. Escreva um programa que possua uma variável com um número inteiro e mostre seu
antecessor e sucessor. */
console.log("Bem vindo!!");

const Numero = Number(prompt('insira um Numero Inteiro: '))

const Suces = Numero+1
const Antes = Numero-1

console.log(`Sucessor: ${Suces}|| Numero: ${Numero} ||Antecessor: ${Antes}`)