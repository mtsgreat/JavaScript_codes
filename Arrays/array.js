console.log(typeof Array, typeof new Array, typeof [])


// Forma válida
let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

// Usando a notação Literal, recomendada
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])


// Forma de Atribuir outro elemento
aprovados[3] = 'Paulo'
//Forma mais usada
aprovados.push('Lucas')
console.log(aprovados.length)

// Inserindo em uma posição aleatória
aprovados[9] = 'Mateus'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)


// Função de Ordenação
aprovados.sort()
console.log(aprovados)


// Formas de Excluir
delete aprovados[1]
console.log(aprovados)


// Função Splice, serve para adiconar elementos em um determinado indice, tambem serve remover elementos

aprovados = ['Bia', 'Carlos', 'Ana']

// primeiro indice passado marca a posição, e o segundo a quantidade de indices contando com o primeiro passado que serão excluidos, parâmetros passados com ' ' adiciona um novo elemento depois das exlclusoes

aprovados.splice(2,1, 'João', 'Jessica')
console.log(aprovados)