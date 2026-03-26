
let heroName = "Rafael";
let heroXP = 1000;
let heroLevel;

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

console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`);
