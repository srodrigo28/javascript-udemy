// coelção dinâmica de pares chaves/valor
const produto = new Object
produto.nome = "Cadeira"
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

// forma de excluir item de produto
delete produto.preco
delete produto['marca do produto']
// console.log(produtos)

const carro = {
    modelo: 'A4',
    valor: 120000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC, Qudra 18',
            numero: 123
        }
    },
    condutores: [
        { nome: 'Junior', idade: 19 },
        { nome: 'Abel', idade: 27 },
        { nome: 'Maria', idade: 23 },
    ],
    calcularValorSeguro: function () {
        // ...
    }
}

carro.proprietario.nome = 'marcos'
carro['proprietario']['endereco']['logradouro'] = 'Avenida brasil'

// console.log(carro)

// excluido atributos
// delete carro.condutores
// delete carro.proprietario.endereco
// delete carro.calcularValorSeguro

console.log(carro)
console.log('total de condutores: ' + carro.condutores.length)