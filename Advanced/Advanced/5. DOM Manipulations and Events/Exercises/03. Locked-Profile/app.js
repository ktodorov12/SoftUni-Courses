function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll("button"));

  buttons.forEach((button) => button.addEventListener("click", showMore));

  function showMore() {
    let lockBtn = this.parentElement.querySelector('input[value="lock"]').checked;
    const hiddenContent = this.parentElement.getElementsByTagName('div')[0];

    if (lockBtn == false) {
      if (this.textContent === "Show more") {
        hiddenContent.style.display = "block"
        this.textContent = "Hide it";
      } else if (this.textContent === "Hide it"){
        hiddenContent.style.display = "none"
        this.textContent = "Show more";
      }
    }
  }
}
