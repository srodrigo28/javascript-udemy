const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 },
    { nome: 'Maria', nota: 10 },
]

// 1. Imperativo
let total1 = 0;
for( let i = 0; i < alunos.length; i++ ){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// 2. Declarativo ( comum )
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// 3. Declarativo reduzida ( comum )
const getNota2 = aluno => aluno.nota
const soma2 = (total, atual) => total + atual
const total3 = (alunos.map(getNota).reduce(soma2)) / alunos.length
console.log(total3)