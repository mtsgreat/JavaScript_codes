const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
        console.log(`${indice + 1}. ${nome}`)
}

// forEach é uma função que existe para arrays
fabricantes.forEach(imprimir)


//outra forma de fazer
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})


// função arrow
fabricantes.forEach(fabricante => console.log(fabricante))