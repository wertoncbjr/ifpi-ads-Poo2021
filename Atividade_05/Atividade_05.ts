/*1. Crie um array de números em typescript e escreva um código que exibe a soma
dos elementos.*/
console.log("|1.Questão|");

let array : number[] = [1,2,3,4,5];
let sum :number = 0;
for (let i : number = 0; i <=  array.length; i++) {
    sum +=  array[i];
    if (i== array.length-1)
    console.log(sum);
}

/*2. Considere o trecho de código abaixo e descreva o que acontece com a execução
do código abaixo:*/
console.log("");
console.log("|2.Questão|");

let a : number[] = [1,2,3,4,5];
for (let i : number = 0; i <= a.length; i++) {
console.log(a[i]);
}

// Apresenta o Numeros da Lista A e retorna o valor undefined ao final da itineração

/*3. Declare um array com 10 números e exiba-os em ordem crescente e em ordem
decrescente.*/
console.log("");
console.log("|3.Questão|");

let valores : number[] = [1,2,3,4,5,6,7,8,9,10];
console.log("Descrecente");
for (let i : number = valores.length-1; i >= 0; i--) {
console.log(valores[i]);

}
console.log("");
console.log("Crecente");
for (var i : number = 0; i <= valores.length-1; i++) {
    console.log(valores[i]);
}

/*4. Declare uma string com o texto “Instituto Federal do Piauí” e use métodos específicos
para:
a. Exibir a string toda em maiúsculo;
b. Retornar o caractere da posição 10;
c. Retornar a última posição da vogal “o”;
d. Dividir a frase em um array de strings tendo como delimitador os caracteres de
espaço.*/
console.log("");
console.log("|4.Questão|");

let str1: string = 'Instituto Federal do Piauí';
console.log(str1.toUpperCase()); //A
console.log(str1.charAt(10));//B
console.log(str1.indexOf('o'));//C
console.log(str1.split(' '));//D


