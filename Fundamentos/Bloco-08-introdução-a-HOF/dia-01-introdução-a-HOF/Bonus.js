const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dmgDrag = () => Math.floor(Math.random() * 35) + 15;
const dmgWarrior = () => Math.floor(Math.random() * 30) + 30;
const dmgMage = () => {
  if(mage.mana < 15) {
    mage.damage = 0;
    console.log('Não possui mana o suficiente para essa magia!')
  } else {
    mage.damage = Math.floor(Math.random() * 45) + 45;
    console.log(`O mago gastou 15 de mana e conjurou uma magia de ${mage.damage} de dano!`);
    mage.mana -= 15;
  } 
}
const gameActions = {
  warrior: () => {
    warrior.damage = dmgWarrior()
    console.log(`O guerreiro desferiu um golpe de ${warrior.damage} de dano!`);
    dragon.healthPoints -= warrior.damage;
  },
  mage: () => {
    dmgMage();
    dragon.healthPoints -= mage.damage;
  },
  dragon: () => {
    dragon.damage = dmgDrag();
    console.log(`O dragão desferiu um golpe de ${dragon.damage} de dano aos jogadores!`);
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  endOfTurn: () => {
    return console.log(battleMembers);
  },
};
gameActions.warrior();
gameActions.mage();
gameActions.dragon();
gameActions.endOfTurn();