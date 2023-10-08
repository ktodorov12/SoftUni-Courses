function loadingBar(load) {
  if (load === 100) {
    console.log("100% Complete!");
  } else {
    let percent = load / 10;
    let signP = "%";
    let dots = 10 - percent;
    let signD = ".";
    console.log(`${load}% [${signP.repeat(percent)}${signD.repeat(dots)}]`);
    console.log("Still loading...");
  }
}

loadingBar(30);
