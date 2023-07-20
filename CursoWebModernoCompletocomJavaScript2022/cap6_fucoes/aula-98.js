const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3,4, function(x,y){
    return x - y
})

imprimirResultado(3,4, (x,y) => x * y)

const pesoa1 = {
    falar: function () {
        console.log('OI pesoa1')
    }
}
console.log(pesoa1.falar)

// const pesoa2 = {
//     falar:  () =>  {
//         console.log('OI pesoa2')
//     }
// }
// pessoa2()