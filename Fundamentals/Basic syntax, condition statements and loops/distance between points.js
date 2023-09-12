function distance(x1, y1, x2, y2) {
    let x = (x2 - x1) * (x2 - x1);
    let y = (y2 - y1) * (y2 - y1);
    let result = Math.sqrt(x + y)
    console.log(result)
}