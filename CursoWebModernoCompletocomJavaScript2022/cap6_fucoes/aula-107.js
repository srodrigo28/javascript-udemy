/** Factory 2 */

function criarProduto(nome, preco, qtd){
    return {
        nome, 
        preco, 
        qtd, 
        desconto: 0.1
    }
}
console.log(criarProduto('Controle PS5 ', 210, 2))