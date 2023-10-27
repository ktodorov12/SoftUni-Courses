function storeProvisions(stock, ordered) {
  class Producs {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
    }
  }

  let av = stock.map((prods, val) => {
    let prod = stock.unshift();
    let smth = stock.unshift();
    return new Producs(prod, smth);
  });

  console.log(av);
}

storeProvisions(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
