function perfectNumber(number) {
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    let isDivisible = number % i === 0 ? (sum += i) : false;
  }
  let isPerfect =
    sum === number
      ? console.log("We have a perfect number!")
      : console.log("It's not so perfect.");
}

perfectNumber(6);
