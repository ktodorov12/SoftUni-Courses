function sortArr(array, order) {
  let sorter = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };

  return array.sort(sorter[order])
}

sortArr([14, 7, 17, 6, 8], "asc");
