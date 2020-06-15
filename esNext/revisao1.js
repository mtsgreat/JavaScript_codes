// let e const

{

    var a = 2
    let b = 3
    console.log(b)

}

console.log(a)



//Template String

const produto = 'Lapis'
console.log(`${produto} é de estudar`)



// Destructuring
const [l, e, ...tras] = 'Mateus'
console.log(l,e, tras)


const [x, ,y] =  [1, 2, 3]
console.log(x,y)


const {idade,nome} = {nome: 'Ana', idade: 23}
console.log(idade, nome)



// pegando atributos especificos de um objeto com Destructuring

const caneta = {
    tipo: 'Bick',
    cor:  'Azul',
    preco: 2.50,
    tampa: true
}

const {tipo, preco} = caneta

console.log(tipo,preco)
