    const pessoa = {
        nome: 'Ana',
        idade: 5,
        endereco: {
            logadouro: 'Rua da paz',
            numero: 56
        }

    }


// usando destructuring

const {nome,idade} = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)


const {endereco: {logadouro,numero, cep=true}} = pessoa
console.log(logadouro,numero,cep)
