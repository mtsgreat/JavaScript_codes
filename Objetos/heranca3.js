const pai = {nome: 'Pedro', corCabelo: 'preto'}

// cria um novo objeto, tendo como prototipo o pai
const filha1 = Object.create(pai)

filha1.nome = 'Jessica'

console.log(filha1.nome)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})


console.log(filha2.nome)

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


// imprimindo todos os objetos

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`por herança: ${key}`)
}