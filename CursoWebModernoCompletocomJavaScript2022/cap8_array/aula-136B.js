let produto1 = 199.05

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

console.log(paraDinheiro(200.10))
console.log('================================================================================')
console.log(paraDinheiro(produto1))