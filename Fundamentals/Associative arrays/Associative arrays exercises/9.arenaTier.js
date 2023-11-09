function arenaTier(info) {
  let poolArena = {};

  let currGlad = info.shift();

  while (currGlad !== "Ave Cesar") {
    let isVS = currGlad.includes("vs");

    if (!isVS) {
      let [gladiator, technique, skill] = currGlad.split(" -> ");

      if (!poolArena[gladiator]) {
        poolArena[gladiator] = {};
        poolArena[gladiator][technique] = skill;
      } else {
        if (!poolArena[gladiator].hasOwnProperty(technique)) {
          poolArena[gladiator][technique] = skill;
        } else {
          let oldValue = poolArena[gladiator][technique];

          if (oldValue < skill) {
            poolArena[gladiator][technique] = skill;
          }
        }
      }
    } else if (isVS) {
      let [firstGladiator, secondGladiator] = currGlad.split(" vs ");

      if (poolArena[firstGladiator] && poolArena[secondGladiator]) {
        let firstTechn = Object.entries(poolArena[firstGladiator]);
        let secondTechn = Object.entries(poolArena[secondGladiator]);

        let hasCommon = firstTechn.filter((x) =>
          secondTechn.join(" ").includes(x[0])
        );

        if (hasCommon.length > 0) {
          let totalFirst = sum(firstTechn);
          let totalSecond = sum(secondTechn);

          if (totalFirst > totalSecond) {
            delete poolArena[secondGladiator];
          } else if (totalSecond > totalFirst) {
            delete poolArena[firstGladiator];
          }
        }
      }
    }

    currGlad = info.shift();
  }

  let sortBySkills = Object.entries(poolArena).sort(
    ([keyA, valA], [keyB, valB]) =>
      sum(Object.entries(valB)) - sum(Object.entries(valA)) ||
      keyA.localeCompare(keyB)
  );

  sortBySkills.forEach((x) => {
    let total = 0;
    let [name, skills] = Object.entries(x);
    let allSkills = Object.entries(skills[1]);
    allSkills.sort(
      (a, b) => Number(b[1]) - Number(a[1]) || a[0].localeCompare(b[0])
    );
    total = sum(allSkills);
    console.log(`${name[1]}: ${total} skill`);
    allSkills.forEach((glad) => console.log(`- ${glad[0]} <!> ${glad[1]}`));
  });

  function sum(arr) {
    let tot = 0;
    arr.forEach((tecnh) => {
      tot += Number(tecnh[1]);
    });
    return tot;
  }
}

arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan vs Alex",
  "Ave Cesar",
]);
