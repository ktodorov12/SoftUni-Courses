function add(numbers) {
  let sumOfOriginal = 0;
  let sumOfNew = 0;
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i]
    sumOfOriginal += num
    if (numbers[i] % 2 != 0) {
      num -= i;
    } else {
      num += i;
    }
    numbers[i] = num
    sumOfNew += num;
  }
  console.log(numbers);
  console.log(sumOfOriginal);
  console.log(sumOfNew);
}

add([-5, 11, 3, 0, 2]);
