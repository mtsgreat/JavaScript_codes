function area(largura, altura){
    const area = largura * altura

    if(area > 20){
        console.log(`Valor acima do permitodo ${area}m2`)
    }else{
        return area
    }

}



console.log(area(9,3))

