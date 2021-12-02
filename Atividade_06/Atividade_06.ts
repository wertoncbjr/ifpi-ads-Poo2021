/*1.Assinale verdadeiro ou falso:
a. ( ) Objetos são modelos para classes;
b. ( ) Atributos de uma classe devem ser obrigatoriamente inicializados para
que as classes compilem;
c. ( ) Uma classe de cadastro é responsável por manter o controle de outras
classes mais simples, que chamamos de classes básicas;
d. ( ) Uma variável declarada dentro de um método deve ser inicializada para
que a classe seja compilável;
e. ( ) Uma variável que seja uma classe declarada em um método é
automaticamente inicializada com null;
f. ( ) Construtores são rotinas especiais que servem para inicializar e
configurar os objetos no momento da instanciação;
g. ( ) Construtores não possuem tipo de retorno e podem ou não ter
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
    Raio: number;
   
    
    calculaPerimetro(): number {
    return 2*3.14*this.Raio ;
    }
    calcularArea(): number {
    return 3.14*(this.Raio**2);    
    }
    }
