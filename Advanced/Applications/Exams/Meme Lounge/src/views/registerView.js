import { register } from "../data/users.js";
import { showNotification } from "../errors.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function registerTemplate() {
  return html` 
  <section id="register">
    <form @submit=${createSubmitHandler(onRegister)} id="register-form">
      <div class="container">
        <h1>Register</h1>
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Enter Username" name="username" />
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Enter Email" name="email" />
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password" />
        <label for="repeatPass">Repeat Password</label>
        <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass" />
        <div class="gender">
          <input type="radio" name="gender" id="female" value="female" />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="male" value="male" checked />
          <label for="male">Male</label>
        </div>
        <input type="submit" class="registerbtn button" value="Register" />
        <div class="container signin">
          <p>Already have an account?<a href="/login">Sign in</a>.</p>
        </div>
      </div>
    </form>
  </section>`;
}

export function showRegisterView() {
  render(registerTemplate());
}

async function onRegister({ username, email, password, repeatPass, gender }) {
  if (!password || !email || !repeatPass || !username || !gender) {
    return showNotification("All field required", "errorBox");
  }

  if (password !== repeatPass) {
    return showNotification("Password don't match", "errorBox");
  }

  await register({ username, email, password, repeatPass, gender });
  page.redirect("/dashboard");
}
