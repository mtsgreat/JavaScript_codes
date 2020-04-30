function tratarErro(erro){
    //throw new Error('....')
    throw 20
}



function imprimirNomeGritado(obj){

        try{
            
            console.log(obj.name.toUpperCase() + "!!!")
        }catch(e){
            tratarErro(e)
        }finally{
            console.log('Final')
        }
    
}

const obj = {name: "Mateus"}

imprimirNomeGritado(obj)