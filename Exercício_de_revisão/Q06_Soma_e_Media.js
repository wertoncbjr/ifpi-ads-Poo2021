const input = require('prompt-sync')()

/* 6. Escreva um programa que leia uma sequência de números inteiros terminada por –1 e
imprima na tela a soma e a média aritmética destes números. Obs: o valor –1 é
somente um terminador e não deve ser considerado nos cálculos.
*/
function main(){

    let num = Number(input('Insira um número inteiro:'))

    let media_A = -1,soma = 0;

    while (num >= 0) {
        soma += num
        num--
        media_A++
    }

    console.log(`O resultado da soma : ${soma}`)
    console.log(`Resultado da P.A : ${soma / media_A}`)

}

main()