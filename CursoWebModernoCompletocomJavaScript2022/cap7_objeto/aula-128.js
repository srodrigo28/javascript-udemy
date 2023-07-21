const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

let convertJson = JSON.stringify(obj)
//let JsonObj = JSON.parse("{ a: 1, b: 2, c: 3 }")
let JsonObj = JSON.parse('{ "a": 1, "b": 2, "c": 3 }')

console.log("Aqui de Obj para JSON: ", convertJson)
console.log("Aqui de JSON para Objeto: ", JsonObj)