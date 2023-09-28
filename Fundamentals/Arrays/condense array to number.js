function condense(nums) {
  let sum = 0;
  let final = [];
  while (nums.length > 1) {
    let condensed = [];
    for (let i = 0; i < nums.length - 1; i++) {
      condensed[i] = nums[i] + nums[i + 1];
    }
    nums = condensed;
  }
  console.log(nums.join(""));
}

condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
condense([1]);
