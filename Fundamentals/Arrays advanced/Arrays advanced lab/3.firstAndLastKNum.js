function firstAndLastKNum(arrOfNum) {
  let k = arrOfNum.shift();

  let slice = arrOfNum.slice(0, k);
  let backSlice = arrOfNum.slice(-k);

  console.log(slice.join(" "));
  console.log(backSlice.join(" "));
}

firstAndLastKNum([2, 7, 8, 9]);
