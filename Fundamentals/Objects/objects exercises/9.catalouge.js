function cataloge(info) {
  info.sort((a, b) => a.localeCompare(b));
  let objectCatalogue = {};
  let alpha = new Set();

  for (let char of info) {
    let [key, value] = char.split(" :");
    objectCatalogue[key] = value;
    alpha.add(char[0]);
  }
  alpha = Array.from(alpha).map((x) => [x]);

  for (let i = 0; i < alpha.length; i++) {
    for (let food in objectCatalogue) {
      let currentWord = food[0];
      if (alpha[i][0] === currentWord) {
        alpha[i].push(food, objectCatalogue[food]);
      }
    }
  }

  for (let i = 0; i < alpha.length; i++) {
    let first = alpha[i][0];
    console.log(first);
    for (let j = 1; j < alpha[i].length; j += 2) {
      console.log(`  ${alpha[i][j]}:${alpha[i][j + 1]}`);
    }
  }
}

cataloge(["Omlet : 5.4", "Shirt : 15", "Cake : 59"]);
