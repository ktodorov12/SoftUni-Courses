function solve(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let arrLength = sorted.length / 2;
  let newArr = [];

  for (let i = 0; i < arrLength; i++) {
    let smallest = sorted.shift();
    let biggest = sorted.pop();
    newArr.push(smallest, biggest);
  }

  return newArr;
}

solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);
