function focused() {
  const sections = Array.from(document.querySelectorAll('input[type="text"]'));
  sections.forEach((section) => {
    section.addEventListener("focus", onFocus);
    section.addEventListener("blur", blured);
  });

  function onFocus() {
    this.parentElement.classList.add("focused");
  }

  function blured() {
    this.parentElement.classList.remove("focused");
  }
}
