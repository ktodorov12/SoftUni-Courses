import { login } from "../data/users.js";
import { showNotification } from "../errors.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = html`
  <section id="login">
    <form @submit=${createSubmitHandler(onLogin)} id="login-form">
      <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text" />
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password" />
        <input type="submit" class="registerbtn button" value="Login" />
        <div class="container signin">
          <p>Dont have an account?<a href="/register">Sign up</a>.</p>
        </div>
      </div>
    </form>
  </section>
`;

export function showLoginView() {
  render(loginTemplate);
}

async function onLogin({ email, password }) {
  if (!email || !password) {
    return showNotification("All fields are requiered", "errorBox");
  }

  await login({ email, password });
  page.redirect("/dashboard");
}
