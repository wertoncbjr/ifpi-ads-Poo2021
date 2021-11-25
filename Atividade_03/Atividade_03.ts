/* 1. Classes são modelos, objetos são classes em
execução/memória (instanciadas);
• Uma classe está para um objeto, assim como:
– Uma receita está para uma torta;
– Uma planta está para uma casa.*/

//Classe
class quadrado {
    Lado: number;
    
    
    Perimetro(): number {
    return this.Lado*4;
    }

    }
//Objetos
let Quadrado : quadrado;
Quadrado = new quadrado();
Quadrado.Lado = 10;


console.log("1.Quadrado Perimetro: " + Quadrado.Perimetro());
/* 2.Métodos : Comportamentos de um objeto ou ações que um
objeto pode realizar;
Ex:
Pessoa: comprar, vender, postar, comentar;
Blog: exibir postagens, excluir comentários,
pesquisar;

Atributos: Características e propriedades que os objetos
possuem;
Ex:
Pessoa: cor, altura, CPF, contas;
Blog: postagens, nome, URL;
Conta bancária: número, saldo, titular;
Jogador: número, nome, velocidade, nível de
cansaço;*/

class Loja {
    compro: number;
    vendeu: number;
    
    lucro(): number {
    return this.compro - this.vendeu;
    }
    }
    let loja : Loja;
loja = new Loja();
loja.compro = 40;
loja.vendeu = 50;

console.log(`2.Lucro da Loja: ${Math.abs(loja.lucro())}`);

/*3. A abstração visa focar no que é importante para um sistema. Você concorda que
um atributo de uma pessoa pode ser importante ou não dependendo do contexto
do sistema. Enumere na tabela abaixo contextos/sistemas distintos em que os
atributos abaixo seriam ou não relevantes:

            Sistema em que é importante

Peso: Nutricionista  , Posto Medico
Tipo de CNH: Detran
Tipo Sanguíneo: Banco de sangue,Escola
Habilidade destra:  Escola
Percentual de gordura: nutricionista  , Posto Medico
Saldo em conta: Banco
Etinia: Escola,Banco de sangue, Posto Medico

            Sistema em que não é importante

Peso:  banco ,Escola ,Banco de sangue , Detran
Tipo de CNH: nutricionista, Posto Medico , Banco ,Escola ,Banco de sangue , 
Tipo Sanguíneo: Banco 
Habilidade destra: nutricionista  , Posto Medico , Banco ,Escola ,Banco de sangue , Detran
Percentual de gordura:Banco ,Escola , Detran
Saldo em conta: nutricionista ,Banco de sangue , Detran
Etinia:Nutricionista, Detran, Banco*/

/*4. Considerando os objetos Pessoa e Conta:

a. Seria interessante em um sistema bancário um objeto "conta" possuir uma
"pessoa" como um atributo interno representando o titular da conta?

Não seria , Por que poderia haver um conflito de informação como pessoas com o
mesmo nome.

b. Olhando no sentido inverso, seria interessante uma pessoa possuir mais de
uma conta como atributo? Que elemento da programação estruturada melhor
representaria o conjunto de contas de uma pessoa?

Ja isso sim poderia Ocorrer , ja que mesmo havendo duas contas seriam ambas com 
indetificadores diferentes
representaria melhor com Herança*/
/*
5. Identifique pelo menos 5 objetos de um sistema de controle acadêmico. Ex: aluno.

1:Aluno
2:Disciplinas
3:Horarios
4:Boletin
5:Matriculas
*/
/*6. Imagine um jogo qualquer. Identifique o máximo de objetos possíveis e eventuais
características (atributos) e comportamentos (métodos) que os mesmos poderiam
ter.

atributo:       Metodos:

Key1            Jump   
Key2            Down
Key3            Right
Key4            Left
Space           Jump
Enter           Reset
Pontuação       Pontos
*/

/*7. Considerando o exemplo da classe Retangulo dos slides, implemente um método
adicional chamado que calcule o perímetro do retângulo e altere a classe
TestaRetangulo para exibir o cálculo do perímetro.*/

class TesteRetangulo {
    Base: number;
    Altura: number;
    
    calculaPerimetro(): number {
    return this.Base + this.Altura * 2;
    }
    }
    let retangulo : TesteRetangulo;
retangulo = new TesteRetangulo();
retangulo.Base = 10;
retangulo.Altura = 20;

console.log("7.Retangulo Perimetro: "+ retangulo.calculaPerimetro());

/* 8. Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
ao raio e exiba a área e o perímetro chamando os dois métodos definidos.*/
class Circulo {
    Raio: number;
   
    
    calculaPerimetro(): number {
    return 2*3.14*this.Raio ;
    }
    calcularArea(): number {
    return 3.14*(this.Raio**2);    
    }
    }
    let circulo : Circulo;
circulo = new Circulo();
circulo.Raio = 10;


console.log(("8.Circulo Perimetro: "+circulo.calculaPerimetro().toFixed(2)));
console.log("8.Circulo Area: "+circulo.calcularArea());

/*9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
valorDebitos. Crie um método chamado saldo() que retorna/calcula a diferença
entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois
atributos e exiba o resultado do método saldo().*/
class SituacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;
   
    
    Saldo(): number {
    return this.valorCreditos-this.valorDebitos ;
    }
    }
  let Financa: SituacaoFinanceira;
Financa = new SituacaoFinanceira();
Financa.valorCreditos = 1500;
Financa.valorDebitos = 1000;

console.log("9.Finança: "+(Financa.Saldo().toFixed(2)));
