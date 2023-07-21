class Lancamento{
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro{
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {
        lancamentos.forEach( item => this.lancamentos.push(item))
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(item => {
            valorConsolidado += item.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz' -280)

const contas = new cicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())