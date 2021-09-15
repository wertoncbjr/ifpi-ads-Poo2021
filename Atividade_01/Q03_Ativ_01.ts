enum estado {
    PI,
    CE, 
    MA}

console.log("--")
console.log("Letra A")
console.log("--")
//letra A
for (let i = 0; i <= estado.MA; i++) {
    console.log (estado[i])
}

console.log("--")
//Letra B
console.log("Letra B")
console.log("--")
for (let i = 0; i <= estado.MA; i++) {
    if (i==0){
        console.log(estado.PI)
    }
    if (i==1){
        console.log(estado.CE)
    }
    if (i==2){
        console.log(estado.MA)
    }  
}
// Foi exibido o indices da enum estado
//0
//1
//2
