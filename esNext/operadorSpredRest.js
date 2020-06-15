// operador ...rest(Juntar)/ Spread(espalhar)


// Usar Spread com objetos
const funcionario = {nome: 'Pedro', salario: 1589.87}

// colocando todos os atributos de Funcionario, ou seja espalhando dentro do Objeto Clone
const clone = {ativo: true, ...funcionario}

console.log(clone)



// Usando Spread com Array

const grupoA = ['Lucas', 'Pedro', 'Larissa']
const grupoFinal = ['Maria', ...grupoA]

console.log(grupoFinal)