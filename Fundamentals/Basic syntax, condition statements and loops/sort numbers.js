function sort(...num) {
    let one = 0;
    let two = 0;
    let three = 0;
  
    for (let nums of num) {
      if (nums > one) {
        three = two;
        two = one;
        one = nums;
      } else if (nums > two) {
        three = two;
        two = nums;
      } else if (nums > three) {
        three = nums;
      }
    }
    console.log(one);
    console.log(two);
    console.log(three);
  }

  sort(1, 5, 6)