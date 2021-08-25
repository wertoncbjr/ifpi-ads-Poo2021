const Prompt = require('prompt-sync')()

/* 12. Faça uma função que recebe por parâmetro uma medida de tempo expressa em
segundos e retorna, também por parâmetro, esse tempo em horas, minutos e
segundos no formato: “hh:mm:ss”.*/

function main(){
    let hora = Prompt('Informe aqui a hora marcada (HH/MM/SS): ')
    console.log(nova_hora(hora))
}

function nova_hora(Horas){
    let Resultado =((Horas[0] + Horas[1]) + ' hora(s) ' + (Horas[3] + Horas[4]) + ' minuto(s) ' + (Horas[6] + Horas[7]) + ' segundo(s) ')
    return Resultado
}

main()