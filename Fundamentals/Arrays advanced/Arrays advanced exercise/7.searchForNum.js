function searchForNum(arrNum, secondArrNum) {
  let takenNums = arrNum.slice(0, secondArrNum[0]);
  let numsToDelete = secondArrNum[1];
  let searchedNum = secondArrNum[2];

  takenNums.splice(0, numsToDelete);

  let search = takenNums.filter((x) => x === searchedNum);
  let count = search.length;

  console.log(`Number ${searchedNum} occurs ${count} times.`);
}

searchForNum([5, 2, 3, 3, 1, 6], [5, 2, 3]);
