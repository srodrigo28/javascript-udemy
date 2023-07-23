Array.prototype.reduce2 = function(calback){
    let acumulador = this[0]
    for( let i = 1; i < this.length; i++){
        acumulador = calback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))

