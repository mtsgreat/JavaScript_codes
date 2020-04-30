// função construtora
function aula (nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

// instanciando novos objetos
const aula1 = new aula('Programação', 234)
const aula2 = new aula('Java Script', 987)


console.log(aula1, aula2)