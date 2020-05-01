const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}

// Tranformando Objeto em um JSON
console.log(JSON.stringify(obj))


// Transformando um JSON em um Objeto

// formatos inválidos
//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}"))


// Formato Válido JSON
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))


// Formatos válidos com outros atributos
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))


