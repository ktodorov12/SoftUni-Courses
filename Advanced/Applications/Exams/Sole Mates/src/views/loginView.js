import { login } from "../data/users.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

//TODO add corresponding html template
const loginTemplate = html`
`;

export function showLoginView() {
  render(loginTemplate);
}

//TODO check fields
async function onLogin({email, password}) {
  if(!email || !password) {
    return alert("All fields are requiered");
  }

  await login({email, password});
  page.redirect("/")
}
