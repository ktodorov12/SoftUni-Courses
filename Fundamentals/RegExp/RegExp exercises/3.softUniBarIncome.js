function softUniBarIncome(info) {
  let conditon =
    /%(?<name>[A-Z][a-z]+)%[^|%$.]*?<(?<product>\w+)>[^|%$.]*?\|(?<quantity>\d+)\|[^|%$.]*?(?<price>\d+\.?\d+)\$/;

  let total = 0;
  for (let currProduct of info) {
    if (currProduct === "end of shift") break;

    let isValid = conditon.exec(currProduct);

    if (isValid) {
      let { name, product, quantity, price } = isValid.groups;
      let currTotal = quantity * price;
      total += currTotal;

      console.log(`${name}: ${product} - ${currTotal.toFixed(2)}`);
    }
  }

  console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
