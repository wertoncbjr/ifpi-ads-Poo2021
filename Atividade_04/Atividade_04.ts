/*1. Suponha uma classe Hotel que sirva apenas para guardar a quantidade de
solicitações de reservas feitas conforme abaixo:*/

class Hotel {
quantReservas : number;

constructor(quantReservas:number){
            this.quantReservas = quantReservas;
}
adicionarReserva() : void {

console.log(this.quantReservas++);
}

}
/*Podemos afirmar que haverá um problema de compilação, pois a variável inteira não
foi inicializada previamente? Justifique.*/
/*O acesso a atributos e métodos dentro da própria
classe devem ser feitos usando this*/
/*2. Ainda sobre a classe do exemplo anterior, considere o método main abaixo:*/
console.log("---------------------------------------------");
console.log("2.Hotel");
console.log("---------------------------------------------");
let hotel : Hotel = new Hotel(2);
console.log("Reservas||Hotel");
console.log(hotel.quantReservas);


/*Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo
quantReservas.
resposta : constructor(quantReservas:number){
            this.quantReservas = quantReservas;
}*/

//3. Considere a classe Radio e as instruções fazem seu uso abaixo::
console.log("---------------------------------------------");
console.log("3.Radio");
console.log("---------------------------------------------");
class Radio {
volume : number;
constructor(volume : number) {
this.volume = volume;
}
}
let r : Radio = new Radio(10);
console.log("Volume:");
console.log(r.volume);

//Justifique o erro de compilação e proponha uma solução.
/*
Não foi adicionado nenhum parametro ao operedor new Radio

Solução = Let r : Radio = new Radio(10);
console.log(r.volume);
*/
/*4. Considerando o uso da classe Conta apresentada em aula e seu uso abaixo:*/
console.log("---------------------------------------------");
console.log("4.Conta");
console.log("---------------------------------------------");
class Conta {
    numero: string;
    saldo: number;

    constructor(num:string,saldoInicial:number){
        this.numero = num;
        this.saldo = saldoInicial;
        }

    sacar(valor: number): void {
    this.saldo = this.saldo - valor;
    }
    depositar(valor: number): void {
    this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
    return this.saldo;
    }
    transferir(contaDestino: Conta, valor: number): void {
    this.sacar(valor);
    contaDestino.depositar(valor);
    }
}

let c1 : Conta = new Conta("1",100);
let c2 : Conta = new Conta("2",100);
c1 = c2;
c1.sacar(10);
c1.transferir(c2,50);
console.log("Conta 01||Saldo:");
console.log(c1.saldo);
console.log("Conta 02||Saldo:");
console.log(c2.saldo);
/*
a. Qual o resultado dos dois "prints"? Justifique sua resposta.
a variavel c2 foi refatorado para variavel c1
c1=90
c2=90
b. O que acontece com o objeto para o qual a referência c1 aponta?
c1 = c2;
*/

/*5. Crie uma classe chamada Jogador e nela:

a. Crie 3 atributos inteiros representando força, nível e pontos atuais;
b. Crie um construtor no qual os 3 parâmetros são passados e inicialize os
respectivos atributos;
c. Crie um método que calcule os pontos relativos a um ataque que são
calculados pela multiplicação de força pelo nível;
d. Crie um método chamado atacar em que é passado um outro jogador como
parâmetro e é feita a subtração de pontos de tal jogador baseado na
quantidade de pontos do jogador atual (“this”).
e. Avalie em com testes dois jogadores instanciados e inicializados através do
construtor. Utilize o método de ataque de cada jogador e ao final, verifique
qual jogador tem mais pontos.
*/
console.log("---------------------------------------------");
console.log("5.Jogador");
console.log("---------------------------------------------");
class Jogador {
   
    Nivel: number;
    Forca: number;
    Pontos_atuais: number;
 
    constructor(Nivel:number,Forca:number,Pontos_atuais:number){
        this.Nivel = Nivel;
        this.Forca = Forca;
        this.Pontos_atuais=Pontos_atuais;
       
        }

    Attack_point(): number {
    return this.Nivel * this.Forca;
    }
    attack_01(JogadorInimigo:Jogador):void{
        JogadorInimigo.Pontos_atuais=JogadorInimigo.Pontos_atuais-this.Attack_point();
            console.log(JogadorInimigo.Pontos_atuais);
            if (JogadorInimigo.Pontos_atuais>=this.Pontos_atuais){
                console.log("Jogador leva mais dano")
            }
            else{
                console.log("Jogador leva menos dano")
            }
        }


    }
    let Jogador01 : Jogador = new Jogador(4,100,2000);
    let Jogador02 : Jogador = new Jogador(2,80,2000);

  
    Jogador01.attack_01(Jogador02);
    Jogador02.attack_01(Jogador01);
   
/*6. Altere a classe conta dos slides conforme as instruções abaixo:
a. Altere o método sacar de forma que ele retorne verdadeiro ou falso. Caso o
saque deixe saldo negativo, o mesmo não será realizado, retornando falso;
b. Altere o método transferir() para que o mesmo use os métodos sacar() e
depositar(). Visto pelo prisma da "proteção do saldo", chamar outros
métodos em vez de acessar o saldo diretamente é mais seguro?
c. Altere o método transferir() para que retorne também um valor lógico e que
não seja feita a transferência caso o sacar() na conta origem não seja
satisfeito;
d. Verifique as diferentes operações implementadas.*/
console.log("---------------------------------------------");
console.log("6.Saldo");
console.log("---------------------------------------------");
class Banco {
    Number: string;
    saldo_acc: number;

    constructor(number:string,saldoInicial:number){
        this.Number = number;
        this.saldo_acc = saldoInicial;
        }

    sacar_bank(value: number): void {
    if (this.saldo_acc>=value){
        this.saldo_acc = this.saldo_acc - value;}
    else{
        console.log("Saque indisponivel")
    }    
    }
    depositar_bank(valor: number): void {
    this.saldo_acc = this.saldo_acc + valor;
    }
    consultarSaldo_bank(): number {
    return this.saldo_acc;
    }
    transferir_bank(contaDestino: Banco, valor_acc: number): void {
        if (this.saldo_acc>=valor_acc){
            this.sacar_bank(valor_acc);
            contaDestino.depositar_bank(valor_acc);
            console.log("Transferencia Completa")
        }
        else{
            console.log("indisponivel")
        }    
    }
}

let Conta01 : Banco = new Banco("1",100);
let Conta02 : Banco = new Banco("2",100);

console.log("||Saque||");
Conta01.sacar_bank(10);
console.log(Conta01.saldo_acc);
console.log("||Transferência||");
Conta01.transferir_bank(Conta02,10);
console.log("||Saldo||");
console.log(Conta01.saldo_acc);
console.log(Conta02.saldo_acc);




/*7. Crie uma classe chamada Produto e nela:
X a. Crie os atributos codigo, descricao, valor e um construtor que os inicialize;
X b. Crie os métodos baixar(quantidade : number) e repor(quantidade : number)
que reduzem e incrementam a quantidade disponível do produto;
X c. Crie um atributo quantidadeMinima e reescreva o método baixar para que
não seja possível realizar a baixa caso a operação deixe a quantidade
abaixo da quantidade mínima;
x d. Crie um método da classe Produto chamado reajusta(taxa : number) que
reajusta em x% o valor do produto.
X e. Crie um método chamado toString() que retorna a representação textual do
produto concatenando todos os atributos.
x f. Crie um método equals(Produto produto) que retorna true ou false se o
produto passado como parâmetro possui o mesmo código;
g. Verifique as diferentes operações implementadas com testes.*/
console.log("---------------------------------------------");
console.log("7.Saldo");
console.log("---------------------------------------------");
class Produto{
    Codigo:number;
    Descricao:string;
    Valor:number; 
    Quantidade:number;
    quantidadeMinima:number;
    Porcetagem:number = 100;
    taxa_Por:number;
    constructor(Codigo:number,Descricao:string,Valor:number,Quantidade:number,quantidadeMinima:number){
        this.Codigo = Codigo;
        this.Descricao = Descricao;
        this.Valor = Valor;
        this.Quantidade = Quantidade;
        this.quantidadeMinima = quantidadeMinima;
        }

        baixar(quantidadedeMinima : number): void {
        if (this.Quantidade>=quantidadedeMinima){
            this.quantidadeMinima=this.Quantidade-quantidadedeMinima; }
            this.Quantidade=this.Quantidade-quantidadedeMinima
            if(this.quantidadeMinima>=quantidadedeMinima){
            console.log("COD:"+this.Codigo+"||Quantidade diponivel:"+this.quantidadeMinima)
        }
        else {
            console.log("Quantidade Indiponivel")
        }
        }
        repor(quantidade : number): void {
        this.Quantidade=this.Quantidade+quantidade;
        }
        reajusta(taxa : number):void{

            this.taxa_Por=taxa;
            this.Porcetagem=this.taxa_Por/this.Porcetagem;
            this.Valor=(this.Valor*this.Porcetagem)+this.Valor;  
        }
        toString():void{
            console.log(`
||COD:${this.Codigo}||Descrição:${this.Descricao}
||Valor:${this.Valor}||Reajuste:${this.taxa_Por}%
||Quantidade:${this.Quantidade}||Quantidade Minima:${this.quantidadeMinima}`)
        }
        equals(Produto:Produto):void{
            if(this.Codigo==Produto.Codigo){
                console.log("Produto Iguais")
            }
            else{
                console.log("Produto Diferentes")
            }
        }
    }

let Produto01 : Produto = new Produto(1,"Capa",15,100,50);
let Produto02 : Produto = new Produto(2,"Pelicula",10,100,50);    

Produto01.baixar(40);
Produto02.repor(10);
Produto01.reajusta(0);
Produto02.reajusta(10);
Produto01.toString();
Produto02.toString();
Produto01.equals(Produto02);