//função anonima é uma função sem nome
// DICA, uma função arrow sempre sera uma função anonima

const soma = function(x,y){
    return x + y;
}


const imprimeResultado = function(a, b, operacao = soma ){

    console.log(operacao(a, b))
}

imprimeResultado(5,5)
imprimeResultado(5,5, soma)



// passando uma função explicitamente
imprimeResultado(3,2, function(a,b){
    return a - b;
})


 
// usando funcao Arrow
imprimeResultado(3,2 , (a, b) => a * b)


//usando funcao dentro do Objeto
const pessoa = {

    falar: function(){
        console.log("Opa")
    }
}

pessoa.falar()