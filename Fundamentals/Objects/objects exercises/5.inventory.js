function inventory(info) {
  let heroObject = [];

  for (let data of info) {
    let [hero, level, items] = data.split(" / ");
    let obj = {
      hero: hero,
      level: Number(level),
      items: items,
    };
    heroObject.push(obj);
  }

  let sorted = heroObject.sort((a, b) => a.level - b.level);

  for (let hero of heroObject) {
    console.log(`Hero: ${hero.hero}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
