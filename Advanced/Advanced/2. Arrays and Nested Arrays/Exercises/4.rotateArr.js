function solve(arr, num) {
  for (let i = 0; i < num; i++) {
    let removedEl = arr.pop();
    arr.unshift(removedEl);
  }

  console.log(arr.join(' '));
}

solve(["1", "2", "3", "4"], 2);
