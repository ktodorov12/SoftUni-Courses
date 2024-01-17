function solve(input) {
  let townInfo = {};

  for (let el of input) {
    let [town, population] = el.split(" <-> ");
    population = Number(population);

    if (!townInfo.hasOwnProperty(town)) {
      townInfo[town] = 0;
    }

    townInfo[town] += population;
  }

  for (let [town, population] of Object.entries(townInfo)) {
    console.log(`${town} : ${population}`);
  }
}

solve([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
