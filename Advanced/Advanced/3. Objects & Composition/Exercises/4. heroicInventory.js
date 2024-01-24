function inventory(input) {
  let heroes = [];

  for (let el of input) {
    let [name, level, items] = el.split(" / ");

    items = items ? items.split(", ") : [];
    let hero = {};
    hero.name = name;
    hero.level = Number(level);
    hero.items = items;

    heroes.push(hero);
  }

  let json = JSON.stringify(heroes);
  console.log(json);
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
