const rl = require('readline-sync')
const nome = rl.question('Qual o seu nome?\n')
const sobrenome = rl.question('\nE o sobrenome?\n')
const idade = rl.question('\nE sua idade?\n')

console.log(`\n${nome},${sobrenome},${idade}`)
