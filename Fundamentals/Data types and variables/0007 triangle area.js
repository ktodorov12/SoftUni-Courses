function triangle(a, b, c){
    let s = (a + b + c) / 2
    let formula = Math.sqrt(s*(s - a)*(s-b)*(s-c));
    console.log(formula);
}
triangle(2,3.5,4)