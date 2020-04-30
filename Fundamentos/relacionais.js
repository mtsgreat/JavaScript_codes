console.log('1)', '1'== 1)
//=== quer dizer 'extremamente igual'
console.log('2)', '1'=== 1)

console.log('3)', '3'!= 3)
console.log('4)', '3'!== 3)

console.log('5)', '3'< 2)

// zero significa a data de referencia
const d1 = new Date(0)
const d2 = new Date(0)
console.log('6)', d1 === d2)
console.log('7)', d1==d2)
console.log('8)', d1.getTime() == d2.getTime())


// DICA, MELHO USAR SEMPRE O EXTRITAMENTE IGUAL "===", 
//LEVA EN CONSIREAÇÃO NÃO SÓ O VALOR, MAIS TB O TIPO DAS VÁRIAVES

console.log('9)', undefined == null)
console.log('10)', undefined === null)