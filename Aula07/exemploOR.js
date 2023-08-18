const rl = require('readline-sync');

let nome = rl.question('Nome: ');
let sobrenome = rl.question('Sobrenome: ');
let apelido = rl.question('Apelido: ');

let usuario = nome || sobrenome || apelido || "anônimo";

console.log(`Olá, ${usuario}`);
