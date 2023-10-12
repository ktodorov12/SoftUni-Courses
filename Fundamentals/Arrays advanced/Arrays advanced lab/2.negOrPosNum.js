function negOrPosNum(arrayofNums) {
  let finalArr = [];

  let maping = arrayofNums.map((x) =>
    x < 0 ? finalArr.unshift(x) : finalArr.push(x)
  );

  finalArr.map(row => {console.log(row)});
}

negOrPosNum(["7", "-2", "8", "9"]);
