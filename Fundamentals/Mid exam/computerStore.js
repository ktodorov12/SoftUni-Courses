function computerStore(input) {
  let priceWithoutTax = 0;
  let isSpecial = false;
  let isInvalid = false;

  for (let i = 0; i < input.length; i++) {
    let command = input[i];

    if (command === "special" || command === "regular") {
      if (command === "special") {
        isSpecial = true;
      }
      if (priceWithoutTax === 0) {
        console.log("Invalid order!");
        isInvalid = true;
      }
      break;
    }

    let number = Number(command);
    priceWithoutTax += number;

    if (number <= 0) {
      number = Math.abs(number);
      console.log("Invalid price!");
      priceWithoutTax += number;
    }
  }

  let taxes = Number(priceWithoutTax * 0.2);
  let totalPrice = Number(taxes + priceWithoutTax);
  if (isSpecial) {
    totalPrice = Number(totalPrice * 0.9);
  }
  if (!isInvalid) {
    console.log(
      `Congratulations you've just bought a new computer!\nPrice without taxes: ${priceWithoutTax.toFixed(
        2
      )}$\nTaxes: ${taxes.toFixed(
        2
      )}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`
    );
  }
}

computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
