function treasureFinder(info) {
  let key = info.shift().split(" ").join("");

  for (let char of info) {
    if (char === "find") break;

    let currKey = 0;
    let newStr = "";

    for (let sign of char) {
      let currNum = sign.charCodeAt();
      let newNum = currNum - key[currKey];
      let toStr = String.fromCharCode(newNum);
      newStr += toStr;
      currKey++;

      if (currKey === key.length) currKey = 0;
    }

    let infoTreasure = newStr.split("&");
    let treasure = infoTreasure[1];

    let sign = infoTreasure[2].indexOf("<");
    let signTwo = infoTreasure[2].indexOf(">");

    let coordinates = infoTreasure[2].substring(sign + 1, signTwo);

    console.log(`Found ${treasure} at ${coordinates}`);
  }
}

treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
