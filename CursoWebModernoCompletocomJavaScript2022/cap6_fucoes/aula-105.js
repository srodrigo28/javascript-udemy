// Cloure é o escopo criado quando unação é declarada
// Esse escopo permite a função acessar e manipular variáveis externas da função

// Contexto léxico em ação!

const x = 'Global'
function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao)