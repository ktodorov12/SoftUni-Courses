function numbers(info) {
  let nums = info.shift().split(" ").map(Number);

  for (let i = 0; i < info.length; i++) {
    let [command, value, replacement] = info[i].split(" ");
    value = Number(value);
    replacement = Number(replacement);
    let includes = nums.includes(value);

    if (command === "Finish") {
      console.log(nums.join(" "));
      break;
    }

    if (command === "Add") {
      nums.push(value);
    } else if (command === "Remove") {
      if (includes) {
        let indx = nums.indexOf(value);
        nums.splice(indx, 1);
      }
    } else if (command === "Replace") {
      if (includes) {
        let indx = nums.indexOf(value);
        nums[indx] = replacement;
      }
    } else if (command === "Collapse") {
      nums = nums.filter((x) => x >= value);
    }
  }
}

numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);

numbers(["1 20 8 -1 10", "Collapse 8", "Finish"]);

numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
