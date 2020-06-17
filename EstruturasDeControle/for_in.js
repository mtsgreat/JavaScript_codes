const notas = [6.7, 9.8, 4.3, 5.6, 7.7]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome = 'Mateus',
    sobrenome = 'Silva',
    idade = 25,
    peso = 89

}

for (atributo in pessoa) {
    console.log(`${atributo} =  ${pessoa[atributo]}`)
}