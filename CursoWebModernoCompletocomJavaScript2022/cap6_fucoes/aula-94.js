let calcular = {
    soma(a,b){
        return console.log(a+b)
    },
    mult(a,b){
        return console.log(a*b)
    },
    div(a,b){
        return console.log(a/b)
    },
    sub(a,b){
        return console.log(a-b)
    }
}
let calcular2 = {
    falar(){
        console.log('Seja bem vindo!')
    }
}

calcular2.falar()
calcular2.falar.bind()

calcular.soma(10,2)
calcular.soma.bind()