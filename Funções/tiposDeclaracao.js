// function declaration
//  DICA- O interpretador do java Scprit carrega essas funções antes de executar o codigo
// dá pra chamar a função antes de carregar ela
// ou seja uma linha acima

console.log(soma(1,1))

function soma (x, y){
    return x + y
}

// function expression,


const sub = function(x,y){
    return x - y
}


// named function expression

const mult = function mult(x, y){
    return x * y
}


console.log(sub(10,5))

console.log(mult(2,3))

