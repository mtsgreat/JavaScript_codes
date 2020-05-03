const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]


// DESAFIO - retornar um array apenas com os preços

// transforma o JSON em objeto
const paraObjeto = json => JSON.parse(json)
const apenasProduto = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasProduto)

console.log(resultado)