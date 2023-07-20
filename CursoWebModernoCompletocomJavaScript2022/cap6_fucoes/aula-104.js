// ContextoLexico

const valor = 'Global'
const local = 'Local'

function minhaFuncao(){
    this.local
    console.log(valor, local)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()