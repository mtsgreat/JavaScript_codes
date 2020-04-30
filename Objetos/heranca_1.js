const ferrari = {
    modelo: 'F40',
    velMax: 240
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}


// __proto__ acessa o objeto pai
console.log(ferrari.__proto__)

console.log(ferrari.__proto__ === Object.prototype )
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


function MeuObjeto(){}
console.log(Object.prototype, MeuObjeto.prototype)