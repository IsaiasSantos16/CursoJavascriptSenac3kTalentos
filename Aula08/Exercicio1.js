const rl = require('readline-sync')

let nome = rl.question("Bem-vindo! Qual o seu nome?\n")
let idade = rl.question(`\nOk ${nome}, e qual sua idade?\n`)

if (idade >= Number(18)) {
	console.log("\nVocê é maior de idade, pode passar!")
} else {
	console.log(`\nVolte quando for maior de idade, ${nome}.`)
}
