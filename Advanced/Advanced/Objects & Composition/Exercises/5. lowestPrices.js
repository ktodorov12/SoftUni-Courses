function lowest(input) {
  let products = {};

  for (let el of input) {
    let [town, prod, price] = el.split(" | ");
    price = Number(price);

    if (!products.hasOwnProperty(prod)) {
      products[prod] = {};
      products[prod].town = town;
      products[prod].price = price;
    }

    if (products[prod].price > price) {
      products[prod].price = price;
      products[prod].town = town;
    }
  }

  Object.entries(products).forEach((el) => {
    let [prodName, items] = el;
    console.log(`${prodName} -> ${items.price} (${items.town})`);
  });
}

lowest([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "Mexico City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Washington City | Mercedes | 1000",
]);
