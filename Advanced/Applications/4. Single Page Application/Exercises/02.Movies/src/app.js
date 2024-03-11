import { init, showView } from "./nav.js";
import { showHome } from "./views/home.js";

const views = {
  "/home": showHome,
  "/logout": true,
  "/login": true,
  "/register": true,
};

init(views);
showView("/home")

document.querySelector("#container nav").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName) {
    showView(e.target.href);
  }
});
