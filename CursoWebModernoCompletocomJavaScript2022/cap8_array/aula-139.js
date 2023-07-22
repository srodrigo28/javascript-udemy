// Filter 1

const produtos = [
    { nome: 'Notebook', preco: 2600, fragil: true, qtd: 10 },
    { nome: 'iPad Pro', preco: 4199, fragil: true, qtd: 20 },
    { nome: 'Copo de Viro', preco: 12.49, fragil: true, qtd: 5 },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false, qtd: 5 },
]

console.log(produtos.filter(function (item) {
    return item.preco > 2500
}))

console.log(produtos.filter(function (item) {
    return item.qtd > 10
}))

console.log(produtos.filter(function (item) {
    return item.fragil == true
}))

// filtro como gatilho personalizado !
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro))
