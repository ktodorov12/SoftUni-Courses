function special(number) {
    for (let i = 1; i <= number; i++){
    let currentNum = i;
    let score = 0
    while(currentNum > 0){
        score += currentNum % 10
        currentNum = Math.trunc(currentNum / 10)
    }
        const answer = score === 5 || score === 7 || score === 11;
        console.log(answer ? `${i} -> True`: `${i} -> False`);
  }
}
special(14);
