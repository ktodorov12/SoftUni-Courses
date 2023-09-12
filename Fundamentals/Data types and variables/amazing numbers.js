function sum(number) {
  number = number.toString();
  let sum = 0;
  for (let char of number) {
    sum += Number(char);
  }

  if (sum.toString().includes("9")) {
    console.log(`${number} Amazing? True`);
  } else {
    console.log(`${number} Amazing? False`);
  }
}
sum(1233);
