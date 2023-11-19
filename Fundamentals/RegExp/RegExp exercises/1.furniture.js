function furniture(info) {
  let condition = />>(?<name>\w+)<<(?<price>\d+\.?\d*)\!(?<quantity>\d+)/;
  let total = 0;

  console.log("Bought furniture:");
  for (let element of info) {
    let prduct = condition.exec(element);

    if (prduct !== null) {
      let { name, price, quantity } = prduct.groups;

      console.log(name);
      let sum = price * quantity;
      total += sum;
    }
  }
  console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
