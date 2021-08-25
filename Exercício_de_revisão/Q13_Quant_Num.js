const prompt = require('prompt-sync')()

/* 13. Escreva uma função que dados um inteiro n e um inteiro d, onde 0 < d ≤ 9, devolve
quantas vezes o dígito d aparece no número n. Por exemplo: se n = 7677 e d = 7, a
função deve retornar 3.
*/

function main(){
    const n = Number(prompt('Insira um número de no máximo 4 casas decimais : '))
    const d = Number(prompt('Insira agora um dígito entre 0 e 9 para vermos quantas vezes ele aparece no número acima: '))
    
    const vetor = Array(n)
    var contador = 0
    if (d > 0 && d < 9 ){
        for(i = 0;i < 4; i++) {
            if (vetor[i] == d ) {   
                contador++       
            }
        }
    }


        console.log(contador)
}

main()
