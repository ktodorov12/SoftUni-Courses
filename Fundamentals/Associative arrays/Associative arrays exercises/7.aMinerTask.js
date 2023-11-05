function aMinerTask(info) {
  let mine = {};

  for (let i = 0; i < info.length; i += 2) {
    let resourse = info[i];
    let quantity = info[i + 1] * 1;

    if (mine.hasOwnProperty(resourse)) {
      mine[resourse] += quantity;
    } else {
      mine[resourse] = quantity;
    }
  }

  Object.entries(mine).forEach((el) => console.log(el.join(" -> ")));
}

aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
