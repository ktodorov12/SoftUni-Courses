function distinctArray(input) {
  let newArr = [];

  for (let i = 0; i < input.length; i++) {
    let check = input[i];
    if (!newArr.includes(check)) {
      newArr.push(check);
    }
  }

  console.log(newArr.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
