const pessoa = {nome: 'João'}
pessoa.nome = 'Lucas'

console.log(pessoa)

// congelou o objeto, não podendo receber mais alterações
Object.freeze(pessoa)


pessoa.nome = 'Darlison'

console.log(pessoa)



//CRIANDO UM OBJETO CONSTANTE DES DO INICIO
const pessoaConstante = Object.freeze({nome :'Jessica'})