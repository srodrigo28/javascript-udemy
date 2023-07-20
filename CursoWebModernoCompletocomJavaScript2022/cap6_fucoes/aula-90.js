function soma(){
    let soma = 0
    for( i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2,4))
console.log('Valor da soma é: ',  soma(2,4))