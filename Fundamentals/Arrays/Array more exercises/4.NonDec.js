function nonDec(numbers) {
  let newArray = [numbers[0]];
  let biggestNum = numbers[0];

  for (let i = 1; i <= numbers.length; i++) {
    let nextNum = numbers[i];

    if (nextNum >= biggestNum) {
      biggestNum = nextNum;
      newArray.push(biggestNum);
    }
  }

  console.log(newArray.join(" "));
}

nonDec([ 20, 3, 2, 21, 6, 1]);
