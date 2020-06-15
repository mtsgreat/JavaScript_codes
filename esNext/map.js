const { maxHeaderSize } = require("http");

const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})


console.log(tecnologias.get('angular'))


const chavesVariadas = new Map([
    [function () {}, 'Funçao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])


chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})


// has, verifica se existe
console.log(chavesVariadas.has(123))

// delentando do map
console.log(chavesVariadas.delete(123))