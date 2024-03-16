import { register, updateNav } from "../service/userService.js";
import { html, page, render } from "../utility/lid.js";
import { createSubmitHandler } from "../utility/userHelper.js";

function registerTemplate() {
  return html` <div class="row space-top">
      <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
      </div>
    </div>
    <form @submit=${createSubmitHandler(onRegister)}>
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
          <div class="form-group">
            <label class="form-control-label" for="rePass">Repeat</label>
            <input
              class="form-control"
              id="rePass"
              type="password"
              name="rePass"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </div>
      </div>
    </form>`;
}

async function onRegister({email, password, rePass}) {
  if (!email || !password || password !== rePass) {
    return alert("Register form error");
  }

  await register({email, password, rePass});
  updateNav();
  page.redirect("/dashboard");
}

export function showRegisterView() {
    render(registerTemplate());
}
