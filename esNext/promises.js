const { resolve } = require("path");

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}


falarDepoisDe(3, 'Que legal!')

    // then pode ser chamado várias vezes
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))


    // para tratar erros usamos o .catch