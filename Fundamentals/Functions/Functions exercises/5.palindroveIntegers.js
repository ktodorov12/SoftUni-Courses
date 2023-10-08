function palindroveIntegers(numbers) {
  function reversing(number) {
    number = number.toString();
    return number.split("").reverse().join("");
  }
  for (let i = 0; i < numbers.length; i++) {
    let isPalendrome =
      numbers[i] == reversing(numbers[i])
        ? console.log(true)
        : console.log(false);
  }
}

palindroveIntegers([123, 323, 421, 121]);
