function solve(arr) {
  let biggest = arr[0];
  let newArr = [biggest];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < biggest) continue;
    biggest = arr[i];
    newArr.push(biggest);
  }

  return newArr;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
