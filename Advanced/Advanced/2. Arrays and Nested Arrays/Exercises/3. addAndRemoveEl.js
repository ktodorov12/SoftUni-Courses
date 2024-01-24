function solve(commands) {
  let arr = [];
  let num = 1;

  for (let el of commands) {
    if (el === "add") arr.push(num);
    else if (el === "remove") arr.pop();
    num++;
  }

  if (arr.length === 0) console.log("Empty");
  else {
    for (let el of arr) console.log(el);
  }
}

solve(["add", "add", "add", "add"]);
