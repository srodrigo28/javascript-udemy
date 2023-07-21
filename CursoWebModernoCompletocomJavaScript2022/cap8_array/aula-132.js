const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
// pop exclui o elemento da lista

console.log(pilotos)

pilotos.pop() // massa quebrou o carro!

console.log(pilotos)

// pop exclui o elemento do fim da lista
// shift exlcui o elemento no inicio da lista

// push adiciona na última posição da lista
// unshift adiciona na primeira posição

// slice retorna um novo array

// pilotos.push('sebastião')
pilotos.unshift('sebastião')
console.log(pilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
