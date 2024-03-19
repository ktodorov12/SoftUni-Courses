import { createSubmitHandler } from "../api/dataService.js";
import { register } from "../api/userService.js";
import { html, render, page } from "../util/lib.js";

function registerTemplate() {
  return html` <section id="form-sign-up" class="view-section">
    <form @submit=${createSubmitHandler(onRegister)} id="register-form" class="text-center border border-light p-5" action="" method="">
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="text" class="form-control" placeholder="Email" name="email" value="" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
      </div>

      <div class="form-group">
        <label for="repeatPassword">Repeat Password</label>
        <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="" />
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </section>`;
}

export function showRegisterView() {
  render(registerTemplate());
}

async function onRegister({ email, password, repeatPassword }) {
  if (!email || password.length < 5) {
    alert("No email or password")
    return;
  }
  if (password !== repeatPassword) {
    alert("Passwords dont match")
    return;
  }

  await register({ email, password, repeatPassword });
  page.redirect("/home");
}
