const prompt = require('prompt-sync')()

//7. Escreva um programa que leia um vetor de 5 posições e apresente-o na tela.
function main(){

const n = 5

const vetor = new Array(n)
for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Number(prompt('Digite o Valor de N: '))
    console.log(`A posição: ${i} tem o valor ${vetor[i]}`)    

}
console.log(` Vetores ${vetor}`)
}
main()