class Pessoas {
    constructor(nome, idade, capital, rendimento){
        this.nome = nome
        this.idade = idade
        this.capital = capital
        this.rendimento = rendimento
    }

    cliente(){
        console.log(`Nome: ${this. nome} idade: ${this.idade}`)
    }
    renda(){
        console.log(`
            Nome: ${this. nome} 
            idade: ${this.idade}, 
            Capital: ${(this.capital * .1).toFixed(2)}`)
    }
}

// const p1 = new Pessoas('Maria', 20)
// p1.cliente()

const p2 = new Pessoas('João', 29, 80000)
p2.renda()