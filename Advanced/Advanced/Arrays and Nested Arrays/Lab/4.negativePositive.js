function solve(arr) {
  let newArr = [];

  for (let el of arr) {
    if (el < 0) newArr.unshift(el);
    else newArr.push(el);
  }

  for (let el of newArr) console.log(el);
}

solve([7, -2, 8, 9]);
