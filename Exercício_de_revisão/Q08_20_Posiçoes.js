const prompt = require('prompt-sync')()

/*8. Escreva um programa que leia e mostre um vetor de 20 elementos inteiros. A seguir,
conte quantos valores pares existem
no vetor.*/
function main(){

const n = 20

const vetor = Array(n)
for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Number(prompt(`A posição: ${i+1}||Digite o Valor de N:`))  
}
console.log(Quantidade_Par(vetor))

console.log(` Vetores ${vetor}`)
}
main()

function Quantidade_Par(Vetor){
    let Quantidade = 0
    
    for(i = 0; i < Vetor.length; i++){
       if (Vetor[i] %2 == 0 && Vetor[i] != 0) {
           Quantidade = Quantidade + 1}
    }
    return Quantidade}