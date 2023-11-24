function solve(info) {
  let n = info.shift();
  let party = {};

  for (let i = 0; i < n; i++) {
    let [name, hp, mp] = info.shift().split(" ");
    let hero = {
      hp: Number(hp),
      mp: Number(mp),
    };

    party[name] = hero;
  }

  let commands = {
    CastSpell,
    TakeDamage,
    Recharge,
    Heal,
  };

  for (let element of info) {
    let [nameCommand, nameHero, value, string] = element.split(" - ");

    if (nameCommand === "End") break;

    value = Number(value);

    let command = commands[nameCommand];
    command(nameHero, value, string);
  }

  for (let heroName in party) {
    let hero = party[heroName];

    console.log(`${heroName}`);
    console.log(`  HP: ${hero.hp}`);
    console.log(`  MP: ${hero.mp}`);
  }

  // functions:
  function CastSpell(name, mpNeeded, spellName) {
    let hero = party[name];
    let currMp = hero.mp;

    if (currMp >= mpNeeded) {
      hero.mp -= mpNeeded;
      console.log(
        `${name} has successfully cast ${spellName} and now has ${hero.mp} MP!`
      );
    } else {
      console.log(`${name} does not have enough MP to cast ${spellName}!`);
    }
  }

  function TakeDamage(name, damage, attacker) {
    let hero = party[name];
    let leftHp = hero.hp - damage;

    if (leftHp > 0) {
      hero.hp = leftHp;
      console.log(
        `${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`
      );
    } else {
      delete party[name];
      console.log(`${name} has been killed by ${attacker}!`);
    }
  }

  function Recharge(name, amount) {
    let hero = party[name];
    let currMp = hero.mp;

    if (amount + currMp > 200) {
      amount = 200 - currMp;
    }

    hero.mp += amount;
    console.log(`${name} recharged for ${amount} MP!`);
  }

  function Heal(name, amount) {
    let hero = party[name];
    let currHp = hero.hp;

    if (currHp + amount > 100) {
      amount = 100 - currHp;
    }

    hero.hp += amount;
    console.log(`${name} healed for ${amount} HP!`);
  }
}

solve([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
