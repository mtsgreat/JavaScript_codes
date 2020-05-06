const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome:'Anana', nota: 8.7, bolsista: false}
]


// Desafio 1: Todos do bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// Desafio 2: algum aluno é bolsista

const alunoBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(alunoBolsista))