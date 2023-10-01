function addAndRemove(arr) {
  let newArr = [];
  let number = 1;
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];

    if (command === "add") {
      newArr.push(number);
    } else if (command === "remove") {
      newArr.pop();
    }

    number++;
  }

  if (newArr.length <= 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join(' '));
  }
}

addAndRemove(['remove', 'remove', 'remove']);
