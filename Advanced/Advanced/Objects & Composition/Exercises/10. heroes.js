function heroes() {
  let result = {
    mage(name) {
      let state = {
        name: name,
        health: 100,
        mana: 100,
        cast(spell) {
          this.mana--;
          console.log(`${this.name} cast ${spell}`);
        },
      };
      return state;
    },
    fighter(name) {
      let state = {
        name: name,
        health: 100,
        stamina: 100,
        fight() {
          this.stamina--;
          console.log(`${this.name} slashes foe`);
        },
      };
      return state;
    },
  };

  return result;
}

let create = heroes();

const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
