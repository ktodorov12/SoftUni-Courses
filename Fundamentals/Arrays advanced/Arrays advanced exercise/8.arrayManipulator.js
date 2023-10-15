function arrayManipulator(numArr, integerArr) {
    for (let i = 0; i < integerArr.length; i++) {
      let splited = integerArr[i].split(" ");
      let command = splited[0];
  
      if (command === "print") {
        console.log(`[ ${numArr.join(", ")} ]`);
        break;
      } else {
        switch (command) {
          case "add":
            let index = Number(splited[1]);
            let element = Number(splited[2]);
            numArr.splice(index, 0, element);
            break;
  
          case "addMany":
            let thisInd = Number(splited[1]);
            splited.splice(0, 2);
            let toNum = restArr.map((x) => Number(x)).join(", ");
  
            numArr.splice(thisInd, 0, toNum);
            break;
  
          case "contains":
            console.log(numArr.indexOf(Number(splited[1])));
            break;
  
          case "remove":
            let removableInd = Number(splited[1]);;
            numArr.splice(removableInd, 1);
            break;
  
          case "shift":
            let shiftAmount = Number(splited[1]);;
            for (let j = 0; j < shiftAmount; j++) {
              let takenEl = numArr.shift();
              numArr.push(takenEl);
            }
            break;
  
          case "sumPairs":
            let rigthNum = numArr.filter((x, i) => i % 2 !== 0);
            let leftNum = numArr.filter((x, i) => i % 2 === 0);
            numArr = leftNum.map((num, i) => {
              if (isNaN(num + rigthNum[i])) {
                return num;
              } else {
                return num + rigthNum[i];
              }
            });
            break;
        }
      }
    }
  }

arrayManipulator(
  [1, 2, 4, 5, 6, 7],

  ["add 1 8", "shift 1", "add 1 99", "print"]
);
