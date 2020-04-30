const pessoa = {
    nome: 'Rebeca',
    idade: 32,
    peso: 13
}

// pega as chaves dos objetos
console.log(Object.keys(pessoa))


// pega os valores do objeto
console.log(Object.values(pessoa))

// pega uma lista das chaves com os valores
console.log(Object.entries(pessoa))


// percorrendo como array
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});


// Definir uma propriedade de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    //enumerado
    enumerable: true,
    // aceita alterações
    writable: false,
    value: '01/01/2020'
})

pessoa.dataNascimento = '01/02/1990'
console.log(pessoa.dataNascimento)


// concatena objetos
 const destino = {a: 1}
 const o1 = {b: 2}
 const o2 = {c: 3, a: 4}

 Object.assign(destino, o1, o2)
 console.log(destino)