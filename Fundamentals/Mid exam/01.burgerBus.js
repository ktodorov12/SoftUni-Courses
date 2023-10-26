function burgerBus(info) {
  let countOfCities = Number(info.shift());
  let total = 0;

  for (let i = 1; i <= countOfCities; i++) {
    let city = info.shift();
    let income = Number(info.shift());
    let expenses = Number(info.shift());
    let exta = 0

    if (i % 3 === 0) {
      if (i % 5 !== 0) {
        exta = expenses / 2;
      }
    }

    if (i % 5 === 0) {
      income -= income * 0.1;
    }
    let profit = income - expenses - exta;
    total += profit;

    console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
  }
  console.log(`Burger Bus total profit: ${total.toFixed(2)} leva.`);
}

burgerBus(["3",
"Sofia",
"895.67",
"213.50",
"Plovdiv",
"2563.20",
"890.26",
"Burgas",
"2360.55",
"600.00"]);
console.log('---------------------');
burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])


