let num1 = 1
let num2 = 2

num1++
console.log(num1)


// Resultado é falso, o num2 só é decrementado DEPOIS da verificação
console.log(++num1 === num2--)