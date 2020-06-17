// For Of = percorre os valores

for (let letra of 'Curso') {
    console.log(letra)
}

const assuntosCurso = ['Map', 'Set', 'Promisse']

for (let i in assuntosCurso) {
    console.log(i)
}


// percorrendo os Valores
for (let assunto of assuntosCurso) {
    console.log(assunto)
}



// Com Map

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promisse', { abordado: false }]
])


for (let assunto of assuntosMap) {
    console.log(assunto)
}

// Percorrendo só as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}


// só os valores
for (let valores of assuntosMap.values()) {
    console.log(valores)
}


// as entradas
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}


const s = new Set(['a', 'b', 'C'])

for (let letra of s) {
    console.log(letra)
}