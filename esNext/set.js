// Não aceita repetição/ não indexado

const times = new Set()
times.add('Sport')
times.add('Santa Cruz').add('Nautico').add('Barcelona')
times.add('Sport')


console.log(times)
console.log(times.size)
console.log(times.has('Sport'))
times.delete('Santa Cruz')




// Outra forma de criar

const nomes = ['Lucas', 'Pedro', 'Darlison', 'Pedro']
const nomesSet = new Set(nomes)

console.log(nomesSet)