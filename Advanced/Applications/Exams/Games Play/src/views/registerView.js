import { register } from "../data/users.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function registerTemplate() {
  return html` 
  <section id="register-page" class="content auth">
    <form @submit=${createSubmitHandler(onRegister)} id="register">
      <div class="container">
        <div class="brand-logo"></div>
        <h1>Register</h1>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="maria@email.com" />

        <label for="pass">Password:</label>
        <input type="password" name="password" id="register-password" />

        <label for="con-pass">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password" />

        <input class="btn submit" type="submit" value="Register" />

        <p class="field">
          <span>If you already have profile click <a href="/login">here</a></span>
        </p>
      </div>
    </form>
  </section>`;
}

export function showRegisterView() {
  render(registerTemplate());
}

async function onRegister({ password, email, ["confirm-password"]: rePassword }) {
  if (!password || !email || !rePassword) {
    return alert("All field required");
  }

  if (password !== rePassword) {
    return alert("Password don't match");
  }

  await register({ password, email, rePassword });
  page.redirect("/");
}
