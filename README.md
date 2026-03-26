<h1 align="center">DIO - Desafio Classificador de Nível de Herói</h1>

<img alt="Imagem da Logo da DIO" src=".github/dio-logo.png">

## 💻 Projeto

Este projeto foi um desafio do Bootcamp GFT Start #6 - Lógica de Programação na DIO. O desafio consistia em criar uma váriavel que armazenasse a quantidade de experiência de um herói e classificá-lo de acordo com a quantidade de sua experiência, para no final imprimir uma mensagem dizendo o nome do herói e o seu nível:
- Se XP for menor do que 1.000 = Ferro
- Se XP for entre 1.001 e 2.000 = Bronze
- Se XP for entre 2.001 e 5.000 = Prata
- Se XP for entre 5.001 e 7.000 = Ouro
- Se XP for entre 7.001 e 8.000 = Platina
- Se XP for entre 8.001 e 9.000 = Ascendente
- Se XP for entre 9.001 e 10.000= Imortal
- Se XP for maior ou igual a 10.001 = Radiante

## 👨‍💻 Resolução do Desafio

Para este desafio, utilizei a linguagem JavaScript, e resolvi ele em alguns passos:

1 - Definir 3 váriaveis: uma que armazena o nome do herói, outra que armazena a quantidade de experiência dele e uma que armazena o nível dele (Inicialmente Undefined)
```
let heroName = "Rafael";
let heroXP = 1000;
let heroLevel;
```

2 - Utilizar a estrutura de Decisão Switch Case para definir as condiçõesd os níveis:
```
switch (true) {

  case heroXP < 1000:
    heroLevel = "Ferro";
    break;

  case heroXP <= 2000:
    heroLevel = "Bronze";
    break;

  case heroXP <= 5000:
    heroLevel = "Prata";
    break;

  case heroXP <= 7000:
    heroLevel = "Ouro";
    break;

  case heroXP <= 8000:
    heroLevel = "Platina";
    break;

  case heroXP <= 9000:
    heroLevel = "Ascendente";
    break;

  case heroXP <= 10000:
    heroLevel = "Imortal";
    break;

    default:
    heroLevel = "Radiante";
    break;
}

```
Pra cada caso, foi dado uma condição de xp mínimo que irá atribuir um nível à variável `heroLevel`. Utilizei `(true)` como parâmetro do switch por que as condições retornam valores booleanos, então o parâmetro precisa ser true para comparar um valor booleano com outro. O valor `default` no código é o nível Radiante, porque se ele chegou no default, todas as condições foram falsas, logo, o XP é maior que 10000.

3 - Imprimir a saída na tela

```
console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`);
```

##

Resolver esse desafio ajudou a reforçar e consolidar meus conhecimentos em lógica de programação. Gratidão ao professor Felipe e a DIO e a GFT pelo bootcamp.


