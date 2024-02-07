function validate() {
  const input = document.getElementById("email");
  input.addEventListener("change", onChange);
  const pattern = /[a-z]+@[a-z]+.[a-z]+/gm;

  function onChange() {
    if (pattern.test(input.value)) input.classList.remove("error");
    else input.classList.add("error");
  }
}
