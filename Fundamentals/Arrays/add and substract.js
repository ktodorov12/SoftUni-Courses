function add(numbers) {
  let sumOfOriginal = 0;
  let sumOfNew = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfOriginal += numbers[i]
    if (numbers[i] % 2 != 0) {
      numbers[i] = numbers[i] - i;
    } else {
      numbers[i] = numbers[i] + i;
    }
    sumOfNew += numbers[i];
  }
  console.log(numbers);
  console.log(sumOfOriginal);
  console.log(sumOfNew);
}

add([-5, 11, 3, 0, 2]);
