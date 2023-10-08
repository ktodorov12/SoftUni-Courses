function addAndSubstract(one, two, three) {
  let sum = (first, second) => first + second;
  let substract = (first, second) => first - second;
  return substract(sum(one, two), three);
}

console.log(addAndSubstract(23, 6, 10));
