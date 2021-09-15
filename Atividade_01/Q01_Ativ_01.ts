/* LETRA A não compila
let a = 10;
a = "2";
console.log(a)*/
//a) O tipo string não pode ser atribuído ao tipo number por isso não ocorre a compilação
let b: any = 10;
b = 2;
console.log(b)
//b)O tipo any deixa a checagem de tipos semelhante ao JavaScript, ocorrendo a compilação
let c: number = 10;
c = 2;
console.log(c)
//c) O tipo number pode ser reatribuído, ocorre a compilação




