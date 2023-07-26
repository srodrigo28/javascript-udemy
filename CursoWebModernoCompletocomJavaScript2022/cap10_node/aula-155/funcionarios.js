const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'm'
const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}
/***
//  lista todos da url
    axios.get(url).then(response => {
        const funcionarios = response.data
        console.log(funcionarios)
    })
*/

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        //.reduce(menorSalario)
    
    console.log(func)
})