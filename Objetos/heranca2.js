// cadeia de prototipos (Prototype chain)

// fazendo referencia a outros atributos
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__ : pai, attr3: 'C'}

console.log(filho.attr2)


const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax}Km/h`
    }
}


const ferrari = {
    modelo: 'F40',
    velMax: 320  // esse atributo vai sombrear o atributo de carro
}

const volvo = {
    modelo: 'V40',
    // super referencia o prototipo
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}


// estabelecendo relaçao de prorotipo, função qu estabelece a relação de prototipo entre dois objetos
// Object.setPrototypeOf( objeto filho, objeto Pai)

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)



volvo.aceleraMais(50)
console.log(volvo.status())


ferrari.aceleraMais(300)
console.log(ferrari.status())