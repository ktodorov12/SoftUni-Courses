function check(letter){
    if (letter.toUpperCase() === letter){
        console.log("upper-case");
    } else if(letter.toLowerCase() === letter){
        console.log("lower-case");
    }
}
check('f')