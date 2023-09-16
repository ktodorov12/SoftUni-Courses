function prime(number) {
  let isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime === true) {
    console.log("true");
  } else {
    console.log("false");
  }
}
prime(7);
