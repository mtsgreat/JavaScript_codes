console.log(module.exports === this)
console.log(module.exports === exports)


// Os 3 estão visívies para fora
this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports)