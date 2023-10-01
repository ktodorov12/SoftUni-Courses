function nTh(arr) {
  let steps = Number(arr[arr.length - 1]);
    let result = ''
  for (let i = 0; i < arr.length - 1; i += steps) {
    result += arr[i] + ' ';
  }
  console.log(result);
}

nTh(["5", "20", "31", "4", "20", "2"]);
