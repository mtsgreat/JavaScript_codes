/* importando o express */
const express = require('express')

/* intanciar o express e associar a variavel app */
const app = express()


 /* importando o body-parser */
 const bodyParser = require('body-parser')

 app.use(bodyParser.urlencoded({extended: true }))


 app.post('/usuarios', (req, resp) => {
     console.log(req.body)
     resp.send('<h1>Parabéns</h1>')
 })


 app.listen(3003)

