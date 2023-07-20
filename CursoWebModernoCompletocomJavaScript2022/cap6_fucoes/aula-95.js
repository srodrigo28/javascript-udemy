/** Exemplo 1 Function comum */
let soma1 = (a=1, b=1) => {
    return (a+b)
}
console.log('numero somados é ', soma1(10, 15))


/** Exemplo 2 Arrow Function */
let soma2 = (a = 2, b = 3) => a + b
console.log('Valor do calculo: ' + soma2(10, 15))