function oddOccurance(info) {
  let arr = info.split(' ').map(el => el.toLowerCase());
  let obj = {};

  for (let word of arr) {
    if (obj.hasOwnProperty(word)) {
      obj[word]++;
    } else {
      obj[word] = 1;
    }
  }

  obj = Object.entries(obj).filter(([word, value]) => {
    if (value % 2 !== 0){
      return word
    }
  })
  .map((el => el[0]))

  console.log(obj.join(' '));
}

oddOccurance("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
