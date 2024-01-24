function catalogue(input) {
  let products = {};
  let sorted = input.sort((a, b) => a.localeCompare(b));

  for (let el of sorted) {
    let [name, price] = el.split(" : ");
    price = Number(price);

    let letter = name[0];

    if (!products.hasOwnProperty(letter)) {
      products[letter] = {};
    }

    products[letter][name] = price;
  }

  Object.entries(products).forEach((el) => {
    let [key, prod] = el;
    console.log(key);

    for (let el in prod) {
      console.log(`  ${el}: ${prod[el]}`);
    }
  });
}

catalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
