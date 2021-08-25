const prompt = require('prompt-sync')();
/*
4. Escreva um programa que apresente o mês por extenso, a partir de um número
digitado pelo usuário (entre 1 e 12).*/
console.log("Bem vindo!!");

const Data = (prompt('insira o Mes(Ex:01=Janeiro):'))

if ( Data=="01" ){
    Mes_Extenso = `Janeiro`}
else if ( Data=='02' ){
    Mes_Extenso = `Fevereiro`}
else if ( Data=='03' ){
    Mes_Extenso = `Março`}
else if ( Data=='04' ){
    Mes_Extenso = `Abril`}
else if ( Data=='05' ){
    Mes_Extenso = `Maio`}
else if ( Data=='06' ){
    Mes_Extenso = `Junho`}
else if ( Data=='07' ){
    Mes_Extenso = `Julho`}
else if ( Data=='08' ){
    Mes_Extenso = `Agosto`}
else if ( Data=='09' ){
    Mes_Extenso = `Setembro`}
else if ( Data=='10' ){
    Mes_Extenso = `Outubro`}
else if ( Data=='11' ){
    Mes_Extenso = `Novembro`}
else if ( Data=='12' ){
    Mes_Extenso = `Dezembro`}
else{
    console.log("Mes invalido")
}       
    console.log(Mes_Extenso)