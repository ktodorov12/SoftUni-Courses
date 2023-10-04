function diagonalAttack(numbers) {
  let leftNums = [];
  let rigthNums = [];
  let leftCount = 0;
  let rightCount = numbers.length - 1;
  let passedMiddle = false;
  //putting diagonals in array
  for (let i = 0; i < numbers.length; i++) {
    let line = numbers[i].split(" ");
    let mid = Math.floor(line.length / 2);

    let first = Number(line[leftCount]);
    let last = Number(line[rightCount]);
    //to check if its before the middle
    if (leftCount < mid && rightCount > mid && !passedMiddle) {
      leftNums.push(first);
      rigthNums.push(last);

      leftCount++;
      rightCount--;
      if (leftCount === mid) {
        passedMiddle = true;
      }
      //after passing the middle
    } else if (leftCount >= 0 && rightCount <= line.length - 1) {
      leftNums.push(last);
      rigthNums.push(first);

      leftCount--;
      rightCount++;
    }
  }
  //filling in the sum
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < leftNums.length; i++) {
    leftSum += leftNums[i];
    rightSum += rigthNums[i];
  }
  // cheking if they are the same value
  let sameValue = leftSum === rightSum;
  if (sameValue) {
    //if sums are not equal, printing the original matrix
  } else {
    numbers.join(" ").split(" ");
    numbers.forEach((row) => console.log(row.split("").join('')));
  }
}

diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
