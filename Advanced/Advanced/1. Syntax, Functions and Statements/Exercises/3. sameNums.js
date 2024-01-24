function solve(num) {
  let toStr = String(num).split('');
  let firstEl = toStr[0];
  let isSame = true;

  for (let n of toStr) {
    if (firstEl !== n) {
      isSame = false;
      break;
    }
  }

  console.log(isSame);
  console.log(toStr.reduce((a, b) => +a + +b));
}

solve(2222222);
