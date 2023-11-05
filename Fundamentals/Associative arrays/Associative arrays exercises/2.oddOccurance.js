function oddOccurance(info) {
  let arr = Array.from(info.split(" "));
  let obj = {};
  let count = 0;
  for (let word of arr) {
    let acc = word.toLowerCase();

    obj[acc] = count;
    if (obj.hasOwnProperty(acc)) {
      count = obj[acc];
      count++;
    }
    count = 0;
  }

  console.log(obj);
}

oddOccurance("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
