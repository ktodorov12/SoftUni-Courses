function netherRealms(info) {
  let demons = {};

  let splitter = /[, ]+/g;
  let allDemons = info.split(splitter);

  for (let currDemon of allDemons) {
    let dmg = 0;
    let health = 0;

    //checking health
    let lettersPattern = /[^0-9.\/+*-]/g;
    let healthMatches = currDemon.match(lettersPattern);

    if (healthMatches !== null) {
      healthMatches.forEach((el) => {
        if (el !== null) {
          let num = el.charCodeAt();
          health += num;
        }
      });
    }
    //checking dmg
    let numberPattern = /[+-]?\d+\.?\d*/g;
    let dmgMatches = currDemon.match(numberPattern);

    if (dmgMatches !== null) {
      dmg = dmgMatches.reduce((a, b) => Number(a) + Number(b));
    }

    //checking multipliers
    let symbolPattern = /[*\/]/g;
    let symbolMatches = currDemon.match(symbolPattern);

    if (symbolMatches !== null) {
      symbolMatches.forEach((el) => {
        if (el === "*") {
          dmg *= 2;
        } else if (el === "/") {
          dmg /= 2;
        }
      });
    }

    demons[currDemon] = [health, dmg];
  }

  Object.entries(demons)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((demon) => {
      let name = demon[0];
      let health = demon[1][0];
      let dmg = Number(demon[1][1]);

      console.log(`${name} - ${health} health, ${dmg.toFixed(2)} damage`);
    });
}

netherRealms("1, Az1azel");
