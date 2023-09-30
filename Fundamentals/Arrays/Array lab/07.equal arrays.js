function equal(first, second) {
  let sum = 0;
  let isEqual = false;
  if (first.length !== second.length) {
    console.log("Unequal");
    return;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] == second[i]) {
      sum += +first[i];
      isEqual = true;
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isEqual = false;
      break;
    }
  }
  if (isEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

equal(["10", "20", "30"], ["10", "20", "30"]);
equal(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equal(["1"], ["10"]);
equal(["1"], ["1", "2"]);
