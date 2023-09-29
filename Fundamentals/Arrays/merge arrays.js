function merge(one, two) {
  let three = [];
  for (let i = 0; i < one.length; i++) {
    if (i % 2 === 0) {
      three.push(+one[i] + +two[i]);
    } else {
      three.push(one[i].concat(two[i]));
    }
  }
  console.log(three.join(" - "));
}

merge(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
