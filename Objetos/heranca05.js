console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


// reverter a String
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Mateus'.reverse())


// pegar primeiro elemento do Array
Array.prototype.first = function(){
    return this[0]
}

console.log([1 , 2, 3, 4, 5].first())