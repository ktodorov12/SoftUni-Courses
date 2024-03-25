import { register } from "../data/users.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

//TODO add html template
function registerTemplate() {
  return html``
}

export function showRegisterView() {
  render(registerTemplate());
}

//TODO check fields
async function onRegister({ password, email, ["re-password"]: rePassword }) {
  if (!password || !email || !rePassword) {
    return alert("All field required");
  }

  if (password !== rePassword) {
    return alert("Password don't match");
  }

  await register({ password, email, "re-password": rePassword });
  page.redirect("/");
}
