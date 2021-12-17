﻿/*1. Crie uma classe Calculadora que tenha:
a. Dois atributos privados (operando1 e 2) do tipo number;
b. Dois métodos públicos, cada um representando uma operação básica;
c. Um construtor onde são passados os operandos e que esses inicializam os
atributos;
Teste a classe calculadora e seus métodos. Tente acessar os atributos
diretamente e verifique o que acontece.*/

class Calculadora {
    private operando1:number;
    private operando2:number;

    constructor(operando1: number, operando2: number) {
        this.operando1=operando1;
        this.operando2=operando2;
	}

	public adição(): number {
    return this.operando1+this.operando2;
	}
    public subtração(): number {
    return this.operando1-this.operando2;
    }
}

let operação :Calculadora = new Calculadora(1,100);

console.log(operação );
console.log(operação.adição());
console.log(operação.subtração());




/*2. Crie uma classe Hora que tenha:
a. Três atributos privados e definidos no construtor chamados hora, minutos e
segundos;
b. Métodos públicos para ler hora, minuto e segundo de forma individual;
c. Um método público para retorne a hora no formato “hh:mm:ss”.*/

class Hora {

    constructor(private hora: number,private minutos: number,private segundos:number) {
	}

	public met_hora(): number {
    return this.hora;
	}
    public met_minutos(): number {
    return this.minutos;
    }  
    public met_segundos(): number {
    return this.segundos;
    }
    public met_horas(): string {
        return `${this.hora}:${this.minutos}:${this.segundos}`;
        }
}

let Hr :Hora  = new Hora (1,50,10);

console.log(Hr);
console.log(Hr.met_hora());
console.log(Hr.met_minutos());
console.log(Hr.met_segundos());
console.log(Hr.met_horas());

/*3. Altere as implementações da classe Banco das aulas anteriores para que:
a. O array de contas seja privado;
b. O método consulta por índice seja privado;
c. Os demais métodos sejam públicos.*/

class Banco {
	private contas: Conta[] = [];
	
	public inserir(conta: Conta): void {
        let contaConsultada = this.consultar(conta.numero);

        if (contaConsultada == null) {
		    this.contas.push(conta);
        }
	}
	
	public get consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	public alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.obter_Numero());
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	public excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
		} 
	}

	public depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    public sacar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);

        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    }

    public transferir(numeroCredito: string, numeroDebito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    public calcularQuantidadeContas(): number {
        return this.contas.length;
    }

    public calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (conta of this.contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    public calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }
}




/*4. Altere também a sua classe Conta dos exercícios anteriores para:
a. Ter atributos privados e métodos “get” para leitura;
b. Verifique se sua implementação da classe Banco e os testes precisarão ser
adaptados para ter métodos de leitura e escrita, visto que os atributos que
agora são privados.*/

class Conta {
	private numero: String;
	private saldo: number;

    constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}
	public obter_Numero(){
		return this.numero
	}

	get sacar(valor: number): void {
		if (this.saldo >= valor) {
			this.saldo = this.saldo - valor;
		}
	}

	get depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	get transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}



let conta : Conta = new Conta("1", 100)
let b: Banco = new Banco();
b.inserir(conta);
b.inserir(new Conta("1", 20));
//b.sacar("1",20);
console.log(conta.saldo);

b.inserir(new Conta("2", 200));

b.transferir("1","2", 10);
console.log(b.consultar("1").saldo);
console.log(b.consultar("2").saldo);
console.log(b.calcularQuantidadeContas());
console.log(b.calcularTotalSaldos());
console.log(b.calcularMediaSaldos());
