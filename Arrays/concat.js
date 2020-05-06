// Conact serve juntar varios Arrays em apenas um, ou, vários elemetentos que você pode passar como parâmetro

const filha = ['Patricia','Cibele']
const filhos = ['Pedro', 'Vinicius']
 
// Os Arrays originais não são modificados

const todos = filha.concat(filhos, 'Ana')
console.log(todos)