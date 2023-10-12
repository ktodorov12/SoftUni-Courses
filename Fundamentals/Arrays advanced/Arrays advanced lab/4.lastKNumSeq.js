function lastKNumSeq(firstNum, secondNum){
    let arrNum = [1];

    for (let i = 1; i < firstNum; i++){
        let sum = 0
        let slice = arrNum.slice(-secondNum)
        for (j = 0; j < slice.length; j++){
            sum += slice[j]
        }
        arrNum.push(sum)
    }
    console.log(arrNum.join(' '));
}

lastKNumSeq(6, 3)