function reverse(a, b, c){
    let normal = a + b + c;
    let reverse = normal.split('').reverse('').join(' ')
    console.log(reverse)
}

reverse('a','b','c')