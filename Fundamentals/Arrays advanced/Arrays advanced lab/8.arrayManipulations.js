function arrayManipulations(mixedArray) {
  let arrNums = mixedArray.shift().split(" ");

  for (let i = 0; i < mixedArray.length; i++) {
    let [command, num, givenIdx] = mixedArray[i].split(" ");

    if (command === "Add") {
      arrNums.push(num);
    } else if (command === "Remove") {
      let idx = arrNums.indexOf(num);

      while (idx !== -1) {
        arrNums.splice(idx, 1);
        idx = arrNums.indexOf(num, idx + 1);
      }
    } else if (command === "RemoveAt") {
      arrNums.splice(num, 1);
    } else if (command === "Insert") {
      arrNums.splice(givenIdx, 0, num);
    }
  }

  console.log(arrNums.join(" "));
}

arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
