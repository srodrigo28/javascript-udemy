const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo', 
        nota: 5
    }, { 
        nome: 'Ana', 
        nota: 6 
    }]
    }, {
        nome: 'Turma M2',
        alunos: [{
            nome: 'Maria',
            nota: 7 
        }, { 
            nome: 'Julio',
            nota: 8
        }
    ]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}