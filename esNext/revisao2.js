// Arrow fuction

const soma = (a,b) => a+b
console.log(soma(3,3))


// Arrow Function (this)

const lexico1 = () => console.log(this === exports)
lexico1()


// parametro default
function log(texto = 'NOME'){
    console.log(texto)
}

log()
log('Mateus')


// Operador rest
function total (...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,4,5))