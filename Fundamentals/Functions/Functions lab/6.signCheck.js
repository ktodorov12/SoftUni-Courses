function signCheck(numOne, numTwo, numThree) {
  let sum = numOne * numTwo * numThree;
  let check =
    sum === Math.abs(sum) ? console.log("Positive") : console.log("Negative");
}

signCheck(-6, -12, 14);

//without multiplying 

function signCheck(numOne, numTwo, numThree) {
    let negativeCount = 0;
    let isNegative = Math.sign(numOne) === -1 ? negativeCount++ : false
    isNegative = Math.sign(numTwo) === -1 ? negativeCount++ : false
    isNegative = Math.sign(numThree) === -1 ? negativeCount++ : false
    
    if (negativeCount % 2 !== 0){
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}
  signCheck(-5, 12, -15);