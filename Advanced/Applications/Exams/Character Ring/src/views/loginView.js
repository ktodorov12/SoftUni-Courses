import { login } from "../data/users.js";
import { html, page, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function loginTemplate() {
  return html`
    <section id="login">
      <div class="form">
        <img class="border" src="./images/border.png" alt="" />
        <h2>Login</h2>
        <form @submit=${createSubmitHandler(onLogin)} class="login-form">
          <input type="text" name="email" id="email" placeholder="email" />
          <input type="password" name="password" id="password" placeholder="password" />
          <button type="submit">login</button>
          <p class="message">Not registered? <a href="#">Create an account</a></p>
        </form>
        <img class="border" src="./images/border.png" alt="" />
      </div>
    </section>
  `;
}

export function showLoginView() {
  render(loginTemplate());
}

async function onLogin({ email, password }) {
  if (!email || !password) {
    return alert("No");
  }

  await login({ email, password });
  page.redirect("/");
}
