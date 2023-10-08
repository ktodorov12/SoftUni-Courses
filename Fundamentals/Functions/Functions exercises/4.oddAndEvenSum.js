function oddAndEvenSum(num) {
  let evenSum = 0;
  let oddSum = 0;
  num = num.toString();
  for (let char of num) {
    char = Number(char);
    let check = char % 2 === 0 ? (evenSum += char) : (oddSum += char);
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
