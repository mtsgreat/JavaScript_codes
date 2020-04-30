// extrair as menores notas do array

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 10]

// Sem o callback

const notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}


console.log(notasBaixas1)




// Usando o CallBack

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)


// Usando Arrow

const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3)