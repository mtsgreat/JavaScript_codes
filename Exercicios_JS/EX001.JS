//01)​ Crie uma função que dado dois valores (passados como parâmetros) 
//mostre no console a soma, subtração, multiplicação e divisão desses valores. é

function calculadora(x,y){
    let soma = x+y
    let multi = x*y
    let divi = x/y
    
   
        console.log(`A Soma dos numeros ${x} e ${y} é ${soma}`)
        console.log(`A Multiplicação dos numeros ${x} e ${y} é ${multi}`)
        console.log(`A Divisão dos numeros ${x} e ${y} é ${divi}`)
    
}



calculadora(100,2)