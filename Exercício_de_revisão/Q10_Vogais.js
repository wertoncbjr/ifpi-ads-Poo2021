  
const prompt = require('prompt-sync')()

/*10. Escreva um programa que leia um texto pelo teclado e remova todas as suas vogais.
Exiba a string resultante.
*/

function main(){

    const letra=(prompt('Digite aqui uma letra do nosso alfabeto alfanumérico português: '))

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' || letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U') {
        console.log('É vogal')
    }else {
        console.log('É consoante')
    }

}

main()