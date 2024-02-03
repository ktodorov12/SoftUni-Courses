function calculator() {
  let firstNumRef;
  let secondNumRef;
  let resultRef;

  function init(selec1, selec2, selecResult) {
    firstNumRef = document.querySelector(selec1);
    secondNumRef = document.querySelector(selec2);
    resultRef = document.querySelector(selecResult);
  }

  function add() {
    resultRef.value = Number(firstNumRef.value) + Number(secondNumRef.value);
  }
  function subtract() {
    resultRef.value = Number(firstNumRef.value) - Number(secondNumRef.value);
  }

  return {
    init,
    add,
    subtract,
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
