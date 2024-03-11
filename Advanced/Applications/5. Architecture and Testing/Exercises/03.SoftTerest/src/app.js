import { showView } from "./nav.js";

document.querySelector("nav").addEventListener("click", (event) => {
  event.preventDefault();
  const tagName = event.target.tagName;
  if (tagName == "A") {
    const url = new URL(event.target.href);
    showView(url.pathname);
  }
  if (tagName == "IMG") {
    showView("/home");
  }
});
