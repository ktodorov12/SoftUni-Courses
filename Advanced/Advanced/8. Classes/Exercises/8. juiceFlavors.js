function juices(solve) {
  let juice = {};
  let bottles = new Map();

  for (let el of solve) {
    let [name, qty] = el.split(" => ");

    if (!juice.hasOwnProperty(name)) {
      juice[name] = {
        count: 0,
        leftQty: 0,
      };
    }

    qty = Number(qty);
    qty += juice[name].leftQty;

    let juiceLeft = qty % 1000;
    let madeBottles = (qty - juiceLeft) / 1000;

    juice[name].leftQty += juiceLeft;
    juice[name].count += madeBottles;

    if (juice[name].count >= 1) {
      bottles.set(name, juice[name].count);
    }
  }

  Array.from(bottles).forEach((juice) => {
    const [name, qty] = juice;
    console.log(`${name} => ${qty}`);
  });
}

juices([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
