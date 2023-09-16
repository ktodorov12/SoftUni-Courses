function binary(number){
    let result = 0;
    let power = number.length
    for (let sign of number){
        sign = Number(sign);
        result += sign * Math.pow(2, power)
        power--
    }
    console.log(result / 2)
}

binary("11101010101")