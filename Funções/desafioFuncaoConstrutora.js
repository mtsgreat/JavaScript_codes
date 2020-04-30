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


// funcao construtora

function novaPessoa(nome='Sem nome'){

    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }

}

const p3 = new novaPessoa('JUH')
p3.falar()

const p4 = new novaPessoa('Seve')
p4.falar()

const p5 = new novaPessoa()
p5.falar()
