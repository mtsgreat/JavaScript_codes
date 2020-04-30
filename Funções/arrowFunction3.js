let comparaComThis = function(param){
    console.log(this === param)
}


comparaComThis(global)


const obj = {}

//atribuindo o this para o obj
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)


// função arrow

let comparaComThisArrow = param => console.log(this === param)