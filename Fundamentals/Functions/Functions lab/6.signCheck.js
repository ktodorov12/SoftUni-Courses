function signCheck(numOne, numTwo, numThree) {
  let sum = numOne * numTwo * numThree;
  let check =
    sum === Math.abs(sum) ? console.log("Positive") : console.log("Negative");
}

signCheck(-6, -12, 14);
