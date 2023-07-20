function getPreco(imposto = 0.1, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto) }`
}

const produto = {
    nome: 'Notebook',
    preco: 10000,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.2

// console.log('Valor do desconto: R$ ' + getPreco())
// console.log(produto.getPreco())

const carro = { preco: 50000, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//console.log(getPreco.call(carro, 0.27, '$'))
console.log(getPreco.apply(carro, [0.27, '$']))

