function latin(number){
    
    for (let i = 0; i < number;i++){
        let letter = String.fromCharCode(97+number)
        for(let j = 0; j < i; j++){
            for (let p = 0; p < j; p++){
                console.log(letter)
            }
        }
    }
}
latin(3)