function storage(info) {
  let map = new Map();

  for (let prd of info) {
    let tokens = prd.split(` `);
    let product = tokens[0];
    let quantity = Number(tokens[1]);

    if (!map.has(product)) {
      map.set(product, +quantity);
    } else {
      let currQuant = map.get(product);
      let newQuant = (currQuant += quantity);
      map.set(product, newQuant);
    }
  }
  for (let kvp of map) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
