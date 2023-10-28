function storeProvisions(stock, ordered) {
  let available = [];

  for (let i = 0; i < stock.length; i += 2) {
    let product = stock[i];
    available[product] = Number(stock[i + 1]);
  }

  for (let i = 0; i < ordered.length; i += 2) {
    let product = ordered[i];
    let find = available.hasOwnProperty(product);

    if (!find) {
      available[product] = 0;
    }
    available[product] += Number(ordered[i + 1]);
  }
  for (let key in available){
    console.log(`${key} -> ${available[key]}`);
  }
}

storeProvisions(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
