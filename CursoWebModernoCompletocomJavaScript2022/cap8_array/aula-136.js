const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

console.log(paraDinheiro(triplo(3)))
console.log(paraDinheiro(soma10(2)))

console.log('---------------------------------------------------------------')
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)