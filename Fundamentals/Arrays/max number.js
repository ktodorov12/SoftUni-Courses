function max(numbers) {
  let topEl = [];
  while (numbers.length > 0) {
    let isBigger = true;
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[0] > numbers[i + 1]) {
        let isBigger = true;
      } else {
        isBigger = false;
        break;
      }
    }
    if (isBigger) {
      topEl.push(numbers[0]);
    }
    numbers.shift();
  }
  console.log(topEl.join(" "));
}

max([41, 41, 34, 20]);
