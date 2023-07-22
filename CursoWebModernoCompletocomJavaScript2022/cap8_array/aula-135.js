Array.prototype.forEach2 = function (calback) {
    for (let i = 0; i < this.length; i++){
        calback(this[i], i)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})