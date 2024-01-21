function toggle() {
  let buttonText = document.getElementsByClassName("button")[0].textContent;
  let text = document.getElementById("extra");

  if (buttonText === "More") {
    text.style.display = "block";
    document.getElementsByClassName("button")[0].textContent = "Less";
  } else if (buttonText === "Less") {
    text.style.display = "none";
    document.getElementsByClassName("button")[0].textContent = "More";
  }
}
