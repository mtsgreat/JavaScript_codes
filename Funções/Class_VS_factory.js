    class pessoa {
        constructor(nome){
            this.nome = nome
        }

        falar(){
            console.log(`Meu nome é ${this.nome}`)
        }
    }

    const p1 = new pessoa('Mateus')
    p1.falar()


// Exemplo com função factory/Arrow

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Maria')
p2.falar()