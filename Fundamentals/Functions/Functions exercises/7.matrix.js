function matrix (number){
    for (let i = 0; i < number; i ++){
        let result = ''
        for (let j = 0; j < number; j++){
            result += number + ' '
        }
        console.log(result);
    }
}

matrix(3)