function sequence(numbers) {
  let numbersLength = numbers.length;
  let longestSequence = 1;
  let equalEl = 0;

  for (let i = 0; i < numbersLength; i++) {
    let currentSequence = 1;
    let currentNum = numbers[i];

    for (let j = i + 1; j < numbersLength; j++) {
      let nextNum = numbers[j];

      if (currentNum === nextNum) {
        currentSequence++;
      } else {
        break;
      }

      if (currentSequence > longestSequence) {
        longestSequence = currentSequence;
        equalEl = currentNum;
      }
    }
  }
  console.log(`${(equalEl+' ').repeat(longestSequence)}`);
}

sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
