const aprovados = ['Aghata', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})


// Usando função arrow
aprovados.forEach(nome => console.log(nome))