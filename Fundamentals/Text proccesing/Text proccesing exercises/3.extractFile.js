function extractFile(info) {
  let arr = info.split("\\");
  let nameAndExtension = arr[arr.length - 1];

  let indx = info.indexOf("\\");
  let lastInd = 0;
  while (indx !== -1) {
    lastInd = indx;
    indx = nameAndExtension.indexOf(".", indx + 1);
  }

  let name = nameAndExtension.substring(0, lastInd);
  let extension = nameAndExtension.substring(lastInd + 1);

  console.log(`File name: ${name}\nFile extension: ${extension}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
