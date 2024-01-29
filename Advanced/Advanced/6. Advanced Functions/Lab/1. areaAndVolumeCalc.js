function areaAndVolumeCalc(area, vol, data) {
  let parsedInput = JSON.parse(data);

  function calc(obj) {
    return {
      area: Math.abs(area.call(obj)),
      volume: Math.abs(vol.call(obj)),
    };
  }
  return parsedInput.map(calc);
}

function area(x, y) {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

areaAndVolumeCalc(
  area,
  vol,
  `[

    {"x":"10","y":"-22","z":"10"},
    
    {"x":"47","y":"7","z":"-5"},
    
    {"x":"55","y":"8","z":"0"},
    
    {"x":"100","y":"100","z":"100"},
    
    {"x":"55","y":"80","z":"250"}
    
    ]`
);
