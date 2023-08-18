const rl = require('readline-sync')
let velocidade = rl.question('Informe uma velocidade (em m/s): \n')
let tempo = rl.question('\nAgora informe um tempo (em segundos): \n')
let distancia = Number(velocidade) * Number(tempo)

console.log(`
**********************************
|	  Distância 1            |
|--------------------------------|
      Velocidade | ${velocidade}m/s
|----------------|---------------|
     	   Tempo | ${tempo}s
|----------------|---------------|
 Dist. Calculada | ${distancia} metros
**********************************
`)

velocidade = rl.question('Informe uma segunda velocidade (em km/h): \n')
tempo = rl.question('\nInforme um tempo (em horas): \n')
distancia = Number(velocidade) * Number(tempo)

console.log(`

**********************************
|	  Distância 2            |
|--------------------------------|
      Velocidade | ${velocidade}km/h
|----------------|---------------|
      	   Tempo | ${tempo} horas
|----------------|---------------|
 Dist. Calculada | ${distancia} km / ${distancia * 1000} metros
**********************************`)
