// Notação ../ serve para sair de cada Pasta


// Acessando Módulos que estão em outras pastas
const moduloA = require('../../Modulo_A')
console.log(moduloA.ateLogo)

// Acessando Módulos Globais
const saudacao = require('saudacao')
console.log(saudacao.hello)


// Acessando Módulos internos do Node
const http = require('http')
http.createServer((req, res) =>{
    res.write('Boa noite!')
    res.end()
}).listen(8080)