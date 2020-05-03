const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemenro na última posicão do array
console.log(pilotos)

pilotos.shift() // Remove da Primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // Adicionar na primeira posição
console.log(pilotos)


// Splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)



// remover
pilotos.splice(3,1) // Massa é removido
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) // novo array, cria um novo array a partir do indice informado

console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)

console.log(algunsPilotos2)


