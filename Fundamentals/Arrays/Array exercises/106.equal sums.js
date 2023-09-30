function equal(numbers) {
  let numbersLength = numbers.length;
  let isEqual = false;
  let index = 0;

  for (let i = 0; i < numbersLength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < numbersLength; j++) {
      let currentNum = numbers[j];
      if (i > j) {
        leftSum += currentNum;
      } else if (j > i) {
        rightSum += currentNum;
      }
    }

    if (leftSum === rightSum) {
      isEqual = true;
      index = i;
      break;
    } else {
      isEqual = false;
    }
  }

  if (isEqual) {
    console.log(index);
  } else {
    console.log("no");
  }
}

equal([1, 2, 3, 3]);
