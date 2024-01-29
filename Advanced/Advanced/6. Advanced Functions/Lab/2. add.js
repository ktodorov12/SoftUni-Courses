function add(num) {
  function multiplication(multiplier) {
    return num + multiplier;
  }

  return multiplication;
}

let add5 = add(5);
console.log(add5(2));
console.log(add5(3));