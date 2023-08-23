let x = 10;

{
   let x = 20;
   console.log(`x dentro do bloco = ${x}`);
}

console.log(`x fora do bloco = ${x}`);

// Nesse programa, a variável x tem valores diferentes fora e dentro do bloco.
// São duas declarações de duas variáveis que têm o mesmo nome, independente
// do tipo (let, const).

// Variáveis declaradas fora do bloco, podem ser usadas e ter seu valor alterado
// dentro do bloco, mas não o contrário.

let x = 10;

{
   x = 20;
   console.log(`x dentro do bloco = ${x}`);
}

console.log(`x fora do bloco = ${x}`);

// Nesse caso será impresso o valor 20 nas duas situações, pois o valor inicial
// (10) é alterado antes da impressão da variável.
