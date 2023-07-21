// Array Javascript

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
// console.log(aprovados)

// console.log('---------------------------------------')

let recuperacao = ['Ana', 'Beto', 'Jorge']
// console.log(recuperacao[0])
// console.log(recuperacao[1])
// console.log(recuperacao[2])

// console.log(recuperacao[0], recuperacao[1], recuperacao[2], '\n', 'Total ', recuperacao.length)

// console.log(aprovados.sort())

// delete aprovados['2']
// console.log(aprovados[1])
// console.log(aprovados[2])

aprovados = ['Xavier']
//aprovados.slice(1, 2)
aprovados.splice(0, 1, 'Ana Julia', 'Aline Eduarda', 'Roberta Silva') // exclui e adiciona
aprovados.push('Ana Julia', 'Aline Eduarda', 'Roberta Silva') // apenas adiciona
console.log(aprovados)

