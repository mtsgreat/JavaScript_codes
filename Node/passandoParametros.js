//Passando Parâmetros entre Módulos

module.exports = function(...nomes){
    
    return nomes.map(nome => `Boa noite ${nome}!`)
}