// Map serve para transformar um Array em outro

const numeros = [1, 2, 3, 4, 5]

// Map é um for com algum propósito, função vai retornar o dobro de cada numero do array
let resultado = numeros.map(function(e){
    return e * 2 
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


// transformando sucessivamente
resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)