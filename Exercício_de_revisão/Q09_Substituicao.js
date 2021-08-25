const prompt = require('prompt-sync')();

/*9. Construir um programa que leia uma string s, e dois caracteres a e b. Em seguida, o
programa deve substituir todas as ocorrências do caractere a na string s pelo caractere
b.*/
function main() {

  const s = prompt("Digite um texto: ").split(""),
    a = prompt("Qual letra sera subtituida: "),
    b = prompt("Digite o caractere que vai substiuir: ");
   
  const resultado = s.map(caracteres => (caracteres === a) ? b : caracteres).join('');

  console.log(`Resultado: ${resultado}`);
}

main();