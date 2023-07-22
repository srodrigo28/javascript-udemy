Array.prototype.map2 = function (calback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(calback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha",     "preco": 3.45 }',
    '{ "nome": "Cardeno",      "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta",       "preco": 7.50 }',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado) // criando um array só com os preços