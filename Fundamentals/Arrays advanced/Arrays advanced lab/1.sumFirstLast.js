function sumFirstLast(array){
    let fakeArray = array.map(x => Number(x))

    let firstEl = fakeArray.shift();
    let lastEl = Number(array.pop());

    let sum = firstEl + lastEl
    console.log(sum);
}

sumFirstLast(['5'])