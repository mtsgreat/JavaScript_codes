function Pessoa(){
    this.idade = 0

    const self = this
    
    // setInterval dispara a função a cada segundos determinados

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa

