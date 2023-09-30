function magic(arr, num) {
    let arrLength = arr.length
    let sum = 0;

    for (let i = 0; i < arrLength; i++){
        let prevNum = arr[i - 1];

        if (i !== 0){

            for (let j = i; j < arrLength; j++){
                let currentNum = arr[j];
                sum = currentNum + prevNum;

                if (sum === num){
                    console.log(`${prevNum} ${currentNum}`);
                }
            }
        }
    }
}

magic([1, 2, 3, 4, 5, 6], 6);
