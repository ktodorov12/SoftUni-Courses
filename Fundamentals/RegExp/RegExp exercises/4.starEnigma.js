function starEnigma(info) {
  let times = Number(info[0]);
  let attacked = {};
  let destroyed = {};

  for (let i = 1; i <= times; i++) {
    let encryptedMessage = info[i];
    
    let conditionSTAR = /[star]/gi;
    let lengthOfStar = encryptedMessage.match(conditionSTAR).length;

    let conditionPlanets = /@(?<planet>[A-Za-z]+)[^-@!:]*?:(?<population>\d+)[^-@!:]*?!(?<attack>[AD])![^-@!:]*?->(?<soldiers>\d+)/;

    let planetInfo = "";
    let isEncripted = conditionPlanets.test(encryptedMessage);

    if (!isEncripted) {
      for (let el of encryptedMessage) {
        let currChar = el.charCodeAt();
        let reduce = currChar - lengthOfStar;
        let reducedChar = String.fromCharCode(reduce);
        planetInfo += reducedChar;
      }
    } else {
      planetInfo = encryptedMessage;
    }

    let planets = planetInfo.match(conditionPlanets);

    if (planets) {
      let name = planets.groups.planet;
      let type = planets.groups.attack;

      if (planets.groups.attack === "A") {
        attacked[name] = type;
      } else {
        destroyed[name] = type;
      }
    }
  }

  print(attacked, "Attacked");
  print(destroyed, "Destroyed");

  function print(from, attack) {
    type = Object.keys(from).sort((a, b) => a.localeCompare(b));
    console.log(`${attack} planets: ${type.length}`);
    type.forEach((planet) => console.log(`-> ${planet}`));
  }
}

starEnigma(["2", "PQ@Alderaa1:30000!A!->20000", "EHfsytsnhf?8555&I&2C9555SR"]);
