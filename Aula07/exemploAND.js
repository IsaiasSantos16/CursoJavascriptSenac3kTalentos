const rl = require('readline-sync');

const nome = rl.question('Nome: ');

// se *não* for informado um nome, imprime ´nome é obrigatório´

// ! inverte o valor, ou seja, se o NOME for vazio (FALSE) ele muda
// para TRUE, pulando para a próxima informação que também é TRUE,
// mas é retornada pois é a última.
!nome && console.log('nome é obrigatório');

// se *foi* informado um nome, imprime ´Oi,´ + nome + '!!'
!nome || console.log(`Oi, ${nome}!!`);

