//Letra A
enum DiasSemana {
    Segunda,
    Terça, 
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo};
//Letra B

namespace DiasSemana{
    
    export function isDiaUtil (DiasSemana:any){
        if (6 == DiasSemana.Sabado || 7 == DiasSemana.Domingo){
            return false;
        }
        else{
            return true;
        } 
        
    }
//Letra C
    console.log(isDiaUtil(DiasSemana))
}
