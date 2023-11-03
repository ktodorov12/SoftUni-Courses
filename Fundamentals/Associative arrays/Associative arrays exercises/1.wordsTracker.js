function wordsTracker(info) {
  let words = info.shift().split(" ");
  let obj = {};

  words.forEach((x) => (obj[x] = 0));

  for (let currWord of info) {
    if (obj.hasOwnProperty(currWord)) {
      obj[currWord] += 1;
    }
  }

  let sort = Object.entries(obj).sort((a,b) => b[1] - a[1]);
  sort.forEach(x => console.log(x.join(' - ')))
}

wordsTracker([
    'is the another',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);
