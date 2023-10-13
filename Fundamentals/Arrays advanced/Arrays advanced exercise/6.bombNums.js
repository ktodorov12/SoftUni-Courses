function bombNums(numSeq, numBomb) {
  let [bombNum, bombPower] = numBomb;
  let sum = 0;

  while (numSeq.includes(bombNum)) {
    let indexOfBomb = numSeq.indexOf(bombNum);
    if (numSeq.includes(bombNum)) {
      let removingRight = numSeq.splice(indexOfBomb + 1, bombPower);
      if (indexOfBomb - bombPower < 0) {
        let removingLeft = numSeq.splice(0, 1);
      } else {
        let removingLeft = numSeq.splice(
          indexOfBomb - bombPower,
          bombPower + 1
        );
      }
    }
  }

  for (let i = 0; i < numSeq.length; i++) {
    if (numSeq[i] !== bombNum) {
      sum += numSeq[i];
    }
  }

  console.log(sum);
}

bombNums([2, 2, 2, 1], [1, 2]);
bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNums([1, 7, 7, 1, 2, 3], [7, 1]);
bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
