function rotate(nubmers) {
  let rotations = Number(nubmers.pop());

  for (let i = 0; i < rotations; i++) {
    let lastEl = nubmers.pop();
    nubmers.unshift(lastEl);
  }
  console.log(nubmers.join(" "));
}

rotate(["Banana", "Orange", "Coconut", "Apple", "15"]);
