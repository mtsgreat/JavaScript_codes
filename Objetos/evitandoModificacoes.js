 // Object.preventExtensions -> vc não consegue adicionar novos atributos, mais pode modificalos e excluir
 
 const produto = Object.preventExtensions({
     nome: 'Qualquer', preco: 1.99, tag: 'promoção'
 })

// Object.isExtensible - > verifica se o objeto foi criado com o Object.preventExtensions
 console.log('Extensivel :' , Object.isExtensible(produto))

 produto.nome = 'Celular'
 produto.descricao = 'CCE'
 delete produto.tag

 console.log(produto)



 //Object.seal -> vc não consegue adicionar novos atributos, excluir, só pode modificar os
 // valores dos atributos
 const pessoa = {nome: 'Maria', idade: 26}
 Object.seal(pessoa)

 // Object.isSealed -> verifica se o objeto esta selado
 console.log('Selado :', Object.isSealed(pessoa))

 pessoa.sobrenome = 'Silva'
 delete pessoa.idade
 pessoa.idade = 50

 console.log(pessoa)


 // Object.frezze = selado + valoresConstantes
 // vc não consegue adicionar, exluir atributos, tb não pode alterar os seus valores


 const carro = {modelo: 'BMW', cor: 'Branca', velMaxima: 320}
 Object.freeze(carro)

 carro.modelo = 'Fusca'
 delete carro.cor
 carro.velMinina = 0
 console.log(carro)