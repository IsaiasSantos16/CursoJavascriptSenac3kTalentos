const rl = require('readline-sync')
let nota1 = rl.question('Informe a primeira nota: ')
let nota2 = rl.question('Informe a segunda nota: ')
let nota3 = rl.question('Informe a terceira nota: ')
let media = ((Number(nota1) + Number(nota2) + Number(nota3)) / 3)

console.log(`
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}

Média: ${media}
`)

console.log(`CSV: ${nota1},${nota2},${nota3},${media}`)

