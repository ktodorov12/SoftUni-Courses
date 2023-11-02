function wordOccurance(info) {
  let obj = {};

  for (let word of info) {
    let count = 1;

    if (obj.hasOwnProperty(word)) {
      count = obj[word];
      count++;
    }

    obj[word] = count;
  }

  let entries = Object.entries(obj);
  entries.sort(([keyA, valA], [keyB, valB]) => valB - valA);

  entries.forEach((x) => console.log(`${x[0]} -> ${x[1]} times`));
}

wordOccurance(["dog", "bye", "city", "dog", "dad","boys", "ginger"]);
