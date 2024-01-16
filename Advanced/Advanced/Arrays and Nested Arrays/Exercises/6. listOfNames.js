function solve(names) {
  let sorted = names.sort((a, b) => a.localeCompare(b));

  for (let i = 1; i <= sorted.length; i++) {
    console.log(`${i}.${sorted[i - 1]}`);
  }
}

solve(["John", "Bob", "Christina", "Ema"]);
