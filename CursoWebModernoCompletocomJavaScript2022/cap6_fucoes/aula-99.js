/** Funções Callback */

const fabricantes = ["Mercedes", "Audio", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1 }. ${nome}`)
}

fabricantes.forEach(imprimir) // imprime com indice
 
fabricantes.forEach(item  => console.log(item)) // imprime sem indice
