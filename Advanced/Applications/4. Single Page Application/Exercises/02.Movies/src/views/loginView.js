import { createSubmitHandler } from "../api/dataService.js";
import { login } from "../api/userService.js";
import { html, page, render } from "../util/lib.js";

function loginTemplate() {
  return html`
    <section id="form-login" class="view-section">
      <form @submit=${createSubmitHandler(onLogin)} id="login-form" class="text-center border border-light p-5" action="" method="">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </section>
  `;
}

export function showLoginView() {
  render(loginTemplate());
}

async function onLogin({ email, password }) {
  if (!email || !password) {
    return;
  }

  await login({ email, password });
  page.redirect("/home");
}
