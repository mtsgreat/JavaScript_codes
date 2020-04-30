const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

//console.log(pessoa.falar())

// bind é o metodo responsave por amarrar um determinado objeto, para ser o dono da execução, this original
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()