/*1.Assinale verdadeiro ou falso:
a. (f) Objetos são modelos para classes;
b. (v) Atributos de uma classe devem ser obrigatoriamente inicializados para
que as classes compilem;
c. (v) Uma classe de cadastro é responsável por manter o controle de outras
classes mais simples, que chamamos de classes básicas;
d. (v) Uma variável declarada dentro de um método deve ser inicializada para
que a classe seja compilável;
e. (f) Uma variável que seja uma classe declarada em um método é
automaticamente inicializada com null;
f. (v) Construtores são rotinas especiais que servem para inicializar e
configurar os objetos no momento da instanciação;
g. (v) Construtores não possuem tipo de retorno e podem ou não ter
parâmetros;
h. (v) Uma classe pode ter várias instâncias;*/

/*2. Crie uma classe chamada triângulo que:
a. Possua 3 atributos inteiros representando os lados;
b. Crie um método que retorna true se os lados formarem um retângulo de
acordo com a regra: |b-c| < a < b+c;
c. Crie 3 métodos : ehIsoceles(), ehEquilatero() e ehEscaleto() que retorne
verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do
método. Eles devem chamar antes de tudo, o método da questão b. e
retornar false se esse método já retornar false também;*/

class Triangulo {
    A: number;
    B: number;
    C: number;

    constructor(A:number,B:number,C:number){
        this.A = A;
        this.B = B;
        this.C = C;

    }

    met_retangulo(A:number,B:number,C:number):boolean{
        if (B-C < A && A < B+C){
            let retangulo = true;
            return retangulo;
    }}
    
    ehIsoceles(A:number,B:number,C:number): boolean{ 
      
        if (A == B || B == C || C == A){
            let Isoceles = true;
            return Isoceles;
            }
    }
    cehEquilatero(A:number,B:number,C:number): boolean {
        if (A == B && A==C ) {
            let Equilatero = true;
            return Equilatero;
        }   
    }
    ehEscaleto (A:number,B:number,C:number) : boolean {
       
        if (A != B && B != C && C != A){
            let Escaleto = true;
            return Escaleto;
        }
    }}


    let c1 : Triangulo = new Triangulo(1,100,4);

    console.log(c1);
    console.log(c1.ehIsoceles);
    console.log(c1.cehEquilatero);
    console.log(c1.ehEscaleto);