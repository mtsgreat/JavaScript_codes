// par nome/valor

const saudacao = 'Ola' // contexto lexico 1

function ex(){
    const saudacao = 'Faaala' // contexto lexico 2
    return saudacao
}

// Obejtos são grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Mateus',
    idade: 25,
    endereco: {
        logradouro: 'Rua da paz',
        numero: 50
    }
}


console.log(saudacao)
console.log(ex())
console.log(Cliente)



