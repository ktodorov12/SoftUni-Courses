function attachEventsListeners() {
  const textFields = Array.from(document.querySelectorAll("div input:nth-child(2)"));
  const inputField = Array.from(document.querySelectorAll('input[type="button"]'));

  inputField.forEach((button) => button.addEventListener("click", onClick));

  function onClick() {
    let text = this.previousElementSibling;

    let operations = {
      days: Number(text.value),
      hours: Number(text.value) / 24,
      minutes: Number(text.value) / 24 / 60,
      seconds: Number(text.value) / 24 / 60 / 60,
    };

    let number = operations[text.id];
    calculate(number);
  }

  function calculate(number) {
    textFields[0].value = number;
    textFields[1].value = number * 24;
    textFields[2].value = number * 24 * 60;
    textFields[3].value = number * 24 * 60 * 60;
  }
}
