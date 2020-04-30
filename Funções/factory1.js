// Função Factory é uma função que retorna um objeto

// Factory simples

function criarPessoa(){
    return {
        nome: 'Mateus',
        sobreNome: 'Silva'
    }
}

console.log(criarPessoa())