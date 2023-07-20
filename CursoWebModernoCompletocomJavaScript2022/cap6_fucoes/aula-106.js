/** Função Factory */

const prod1 = {
    nome: '',
    preco: 45,
    qtd: 10
}

function criarProduto(){
    return{
        nome: 'Notebook',
        preco: 1000,
        qtd: 10
    }
}

console.log(criarProduto())