const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo de Plastico", preco: 18.99, fragil: false}
]

// filter serve para filtrar um array com base em algum critério
console.log(produtos.filter(function(p){
    return p.preco >= 500
}))



// DESAFIO - retornar os produtos com o valores maiores ou igual a 500 e os progutos frágeis
const valoresCaros = p => p.preco >= 500
const produtoFragil = p => p.fragil

console.log(produtos.filter(valoresCaros).filter(produtoFragil))



