function print(start, end){
    let sum = 0;
    let spaced = ''
    while(start <= end){
        spaced += `${start} `
        sum += start
        start++
    }
    console.log(spaced);
    console.log(`Sum: ${sum}`);
}

print(5, 10)