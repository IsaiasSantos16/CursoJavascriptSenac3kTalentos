console.log('Bem-vindo!\n');

const rl = require('readline-sync');
const nome = rl.question('Qual o seu nome?\n');
const sobrenome = rl.question('\nE o sobrenome?\n');
const ano = rl.question('\nCerto ' + nome + ', qual o ano atual?\n');
const idade = rl.question('\nOk, e qual sua idade?\n');
const email = rl.question('\nPor fim, informe o seu e-mail:\n');
const anoDeNascimento = Number(ano) - Number(idade);

console.log(`
Nome: ${nome}
Sobrenome: ${sobrenome}
Idade: ${idade}
E-mail: ${email}
Ano de Nascimento: ${anoDeNascimento}
`);
