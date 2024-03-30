import { register } from "../data/users.js";
import { showNotification } from "../errors.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function registerTemplate() {
  return html` <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${createSubmitHandler(onRegister)} class="register-form">
        <input type="text" name="email" id="register-email" placeholder="email" />
        <input type="password" name="password" id="register-password" placeholder="password" />
        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>`;
}

export function showRegisterView() {
  render(registerTemplate());
}

async function onRegister({ password, email, ["re-password"]: rePassword }) {
  if (!password || !email || !rePassword) {
    return showNotification("All field required", "errorBox");
  }

  if (password !== rePassword) {
    return showNotification("Passwords don't match", "errorBox");
  }

  await register({ password, email });
  page.redirect("/");
}
