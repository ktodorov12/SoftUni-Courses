function solve(input) {
  let heroes = {};

  let commands = {
    Enroll,
    Learn,
    Unlearn,
  };

  while (input[0] !== "End") {
    let line = input.shift();
    let tokens = line.split(" ");
    let nameCommand = tokens[0];

    let command = commands[nameCommand];
    command(tokens[1], tokens[2]);
  }

  console.log("Heroes:");
  for (let name in heroes) {
    console.log(`== ${name}: ${heroes[name].join(", ")}`);
  }

  //functions
  function Enroll(name) {
    if (heroes.hasOwnProperty(name)) {
      console.log(`${name} is already enrolled.`);
    } else {
      heroes[name] = [];
    }
  }

  function Learn(name, spell) {
    if (!heroes.hasOwnProperty(name)) {
      console.log(`${name} doesn't exist.`);
    } else if (heroes[name].includes(spell)) {
      console.log(`${name} has already learnt ${spell}.`);
    } else {
      heroes[name].push(spell);
    }
  }

  function Unlearn(name, spell) {
    if (!heroes.hasOwnProperty(name)) {
      console.log(`${name} doesn't exist.`);
    } else if (!heroes[name].includes(spell)) {
      console.log(`${name} doesn't know ${spell}.`);
    } else {
      let ind = heroes[name].indexOf(spell);
      heroes[name].splice(ind, 1);
    }
  }
}

solve(["Enroll Stefan",
"Enroll Peter",
"Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn John ItShouldNotWork",
"Unlearn George Dispel",
"Unlearn Stefan ItShouldWork",
"End"])
