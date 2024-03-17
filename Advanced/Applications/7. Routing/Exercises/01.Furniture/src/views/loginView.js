import { login, updateNav } from "../service/userService.js";
import { html, page, render } from "../lib.js";
import { createSubmitHandler } from "../utility/userHelper.js";

function loginTemplate() {
  return html` <div class="row space-top">
      <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
      </div>
    </div>
    <form @submit=${createSubmitHandler(onLogin)}>
      <div class="row space-top">
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="email">Email</label>
            <input class="form-control" id="email" type="text" name="email" />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="password">Password</label>
            <input
              class="form-control"
              id="password"
              type="password"
              name="password"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Login" />
        </div>
      </div>
    </form>`;
}

async function onLogin({ email, password }) {
  if (!email || !password) {
    return alert("Login form error");
  }

  await login({ email, password });
  updateNav();
  page.redirect("/dashboard");
}

export function showLoginView() {
  render(loginTemplate());
}
