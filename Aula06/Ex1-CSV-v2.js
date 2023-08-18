console.log('Bem-Vindo!\n')

const rl = require('readline-sync')

const nome = rl.question('\nQual o seu nome?\n')
const ano = rl.question(`\nCerto ${nome}, em que ano estamos?\n`)
const idade = rl.question('\nQuase la! Me informe sua idade: \n')
const email = rl.question('\nUltima pergunta!!\nQual seu e-mail?\n')
const anoDeNascimento = Number(ano) - Number(idade)

console.log(`\nCSV: ${anoDeNascimento},${nome},${idade},${email}`)

