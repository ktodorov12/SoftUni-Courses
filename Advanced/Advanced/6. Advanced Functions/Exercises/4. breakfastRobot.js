function solution() {
  let ing = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  const commands = {
    restock: (element, qty) => {
      ing[element] += qty;
      return "Success";
    },
    prepare: (recipe, qty) => {
      let elements = recipes[recipe];
      for (let element in elements) {
        let total = recipes[recipe][element] * qty;
        if (ing[element] < total) {
          return `Error: not enough ${element} in stock`;
        }

        ing[element] -= total;
      }
      return "Success";
    },
    report: () => {
      let protein = `protein=${ing.protein}`;
      let carb = `carbohydrate=${ing.carbohydrate}`;
      let fat = `fat=${ing.fat}`;
      let flavour = `flavour=${ing.flavour}`;
      return `${protein} ${carb} ${fat} ${flavour}`;
    },
  };

  function robot(input) {
    let [command, name, qty] = input.split(" ");
    qty = Number(qty);
    return commands[command](name, qty);
  }

  return robot;
}

let manager = solution();

//console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in
