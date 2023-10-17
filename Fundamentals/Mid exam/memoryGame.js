function memoryGame(input) {
  let numbers = input[0].split(" ");
  let counter = 0;

  for (let i = 1; i < input.length; i++) {
    let command = input[i].split(" ");
    if (command[0] === "end" || numbers.length === 0) {
      break;
    }
    counter++;
    let firstIndex = Number(command[0]);
    let secondIndex = Number(command[1]);
    let outOfBound =
      firstIndex < 0 ||
      firstIndex >= numbers.length ||
      firstIndex === secondIndex ||
      secondIndex < 0 ||
      secondIndex >= numbers.length;

    if (firstIndex === secondIndex || outOfBound) {
      let middle = numbers.length / 2;
      numbers.splice(middle, 0, `-${counter}a`, `-${counter}a`);
      console.log("Invalid input! Adding additional elements to the board");
      continue;
    }

    let simbolOne = numbers[firstIndex];
    let simbolTwo = numbers[secondIndex];

    if (simbolOne == simbolTwo) {
      numbers.splice(firstIndex, 1);
      secondIndex = numbers.indexOf(simbolTwo);
      numbers.splice(secondIndex, 1);
      console.log(`Congrats! You have found matching elements - ${simbolOne}!`);
    } else {
      console.log("Try again!");
    }
  }

  if (numbers.length > 0) {
    console.log(`Sorry you lose :( \n${numbers.join(" ")}`);
  } else {
    console.log(`You have won in ${counter} turns!`);
  }
}

memoryGame(["9 9", "0 1", "end", "-1 0"]);
