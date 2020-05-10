const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcionarioAtual) => {
     return func.salario < funcionarioAtual.salario ? func : funcionarioAtual
} 

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)


    // Mulher Chinesa com o menor Salário?

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)


    console.log(func)
} )