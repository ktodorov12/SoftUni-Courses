function sorting(numArray) {
  let sorted = numArray.sort((a, b) => b - a);
  let newArr = [];
  let impostorArr = sorted.slice(0);
  for (let i = 0; i < numArray.length; i++) {
    let biggestNum = impostorArr.shift();
    let smallestNum = impostorArr.pop();

    newArr.push(biggestNum, smallestNum);
  }

  console.log(newArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
