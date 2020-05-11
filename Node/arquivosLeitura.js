// Lendo Arquivos

const fs = require('fs')

const caminho = __dirname + '/arquivo.json'


// sincrono...
const conteudo = fs.readFileSync(caminho, 'Utf-8')
console.log(conteudo)

//assincrono... // forma mais interessante
fs.readFile(caminho, 'utf-8', (err,  conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})



// Opção simples

const config = require('./arquivo.json')
console.log(config)



// Leitura de Uma pasta
// __dirname representa o diretório atual

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})