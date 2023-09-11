function integerFloat(a, b, c){
    let sum = a + b + c;
    if (sum % 1 === 0){
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`)
    }
}
integerFloat(9, 100, 1.1)