function soma1(a,b,c){
    a = a || 2
    b = b || 2
    c = c || 2
    return a + b + c
}


//console.log(soma1())
//console.log(soma1(1))

// valor padrão 1
function soma2(a=1,b=1,c=1){
    return a+b+c
}

console.log(soma2(0,0,0))

