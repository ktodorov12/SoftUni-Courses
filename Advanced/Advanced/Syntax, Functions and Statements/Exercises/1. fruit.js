function solve(fruit, weight, price) {
  let inKg = weight / 1000
  let totPrice = inKg * price;
  console.log(`I need $${totPrice.toFixed(2)} to buy ${inKg.toFixed(2)} kilograms ${fruit}.`);
}

solve("orange", 2500, 1.8);
