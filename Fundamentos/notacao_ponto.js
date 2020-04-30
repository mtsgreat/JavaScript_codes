//console.log(Math.pow(2.3))

const obj1 = {}
obj1.nome = 'Mateus'

console.log(obj1.nome)


function obj(nome){
    this.nome = nome
    
}

const ob2 = new obj('Celular')
const obj3 = new obj('Mouse')

console.log(ob2.nome)
console.log(obj3.nome)
