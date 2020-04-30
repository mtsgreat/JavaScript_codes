// objeto é uma coleção dinamica de pares chave/ valor

//const produto = new Object
//produto.nome = 'Cadeira'

//produto['Marca do produto'] = 'Generico'

//produto.preco = 220

//console.log(produto)

////delete produto.preco
//delete produto['Marca do produto']
//console.log(produto)



const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Mates Silva do Nascimento',
        idade: 25,
         endereco : {
            rua: 'Ligia gomes',
            numero: 50,
            complemento: 'Casa',
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValordoSeguro: function(){
        //....
    }
}

// TIPO DE ATRIBUIÇÃO DE VALORES

carro.proprietario.endereco.numero = 10100

carro['proprietario']['endereco']['complemento'] = 'cASINHA'


//console.log(carro)

//deletando alguns atributos

delete carro.proprietario.endereco
delete carro.condutores
delete carro.calcularValordoSeguro

console.log(carro)