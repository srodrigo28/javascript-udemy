const produtos = [
    { nome: 'João', valor: 100.40 },
    { nome: 'Maria', valor: 201.17 },
    { nome: 'Maria', valor: 1050.70 },
]

// 1. Imperativo
let total1 = 0;
for( let i = 0; i < produtos.length; i++ ){
    total1 += produtos[i].valor
}
console.log(total1 / produtos.length.toFixed(2))

// 2. Declarativo ( comum )
const getvalor = produto => produto.valor
const soma = (total, atual) => total + atual
const total2 = produtos.map(getvalor).reduce(soma)
console.log(total2 / produtos.length.toFixed(2))

// 3. Declarativo reduzida ( comum )
const getvalor2 = produto => produto.valor
const soma2 = (total, atual) => total + atual
const total3 = (produtos.map(getvalor).reduce(soma2)) / produtos.length
console.log("Total de Produtos: R$", parseFloat(total3.toFixed(2), ',', '.'))