function numberModifications(number) {
  let result = 0;
  let count = 0;
  number = number.toString();
  do {
    result = 0;
    count = 0;
    for (let char of number) {
      result += Number(char);
      count++;
    }
    
    if (result / count < 5) {
      number += 9;
    }
  } while (result / count < 5);

  console.log(number);
}

numberModifications(101);
