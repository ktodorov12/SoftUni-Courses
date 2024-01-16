function solve(a, b) {
  let GCD = 0;

  for (let i = 9; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      GCD = i;
      return GCD;
    }
  }
}

console.log(solve(2154, 458));
