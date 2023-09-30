function rotation(arr, number) {

  for (let i = 0; i < number; i++) {
    let firstEl = arr.shift();
    arr.push(firstEl);
  }
  console.log(arr.join(' '));
}

rotation([2, 4, 15, 31], 5);
