function smallNums(arrNum) {
  let sorting = arrNum
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(" ");

  console.log(sorting);
}

smallNums([30, 15, 50, 5]);
