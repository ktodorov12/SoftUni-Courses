function solve(input) {
  let targetedCities = {};

  while (input[0] !== "Sail") {
    let [townName, population, gold] = input[0].split("||");

    let city = {
      population: Number(population),
      gold: Number(gold),
    };

    if (targetedCities.hasOwnProperty(townName)) {
      targetedCities[townName].gold += +gold;
      targetedCities[townName].population += +population;
    } else {
      targetedCities[townName] = city;
    }
    input.shift();
  }
  input.shift();

  let commands = {
    Plunder(townName, people, gold) {
      targetedCities[townName].population -= Number(people);
      targetedCities[townName].gold -= Number(gold);

      console.log(`${townName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

      let city = targetedCities[townName];

      if (city.gold === 0 || city.population === 0) {
        delete targetedCities[townName];
        console.log(`${townName} has been wiped off the map!`);
      }
    },

    Prosper(townName, gold) {
      if (Math.abs(gold) != gold) {
        console.log("Gold added cannot be a negative number!");
      } else {
        targetedCities[townName].gold += Number(gold);
        console.log(`${gold} gold added to the city treasury. ${townName} now has ${targetedCities[townName].gold} gold.`);
      }
    },
  };

  while (input[0] !== "End") {
    let [commandName, name, valueA, valueB] = input[0].split("=>");
    let command = commands[commandName](name, valueA, valueB);
    input.shift();
  }

  let leftCities = Object.entries(targetedCities);

  if (leftCities.length > 0) {
    console.log(`Ahoy, Captain! There are ${leftCities.length} wealthy settlements to go to:`);

    leftCities.forEach((element) => {
      let name = element[0];
      let people = element[1].population;
      let gold = element[1].gold;

      console.log(`${name} -> Population: ${people} citizens, Gold: ${gold} kg`);
    });
  } else {
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
  }
}

solve(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

