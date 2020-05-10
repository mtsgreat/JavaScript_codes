// Entendendo o this

console.log(this === global) // false
console.log(this === module) // false

console.log(this === module.exports) // true
console.log( this === exports) // true


// Dentro de uma função, o this não aponta para o exports, e sim para o global

function logThis(){
    console.log('Dentro de uma Função...')
    console.log(this === exports) // true
    console.log(this === global) // true


}

logThis()