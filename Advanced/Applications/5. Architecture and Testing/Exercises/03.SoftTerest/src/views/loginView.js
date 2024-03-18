import { render, html, page } from "../lib.js";
import { createSubmitHandler } from "../services/dataService.js";
import { login, updateNav } from "../services/userService.js";

function loginTemplate() {
  return html`
    <div class="container home wrapper  my-md-5 pl-md-5">
      <div class="row-form d-md-flex flex-mb-equal ">
        <div class="col-md-4">
          <img class="responsive" src="./images/idea.png" alt="" />
        </div>
        <form @submit=${createSubmitHandler(onLogin)} class="form-user col-md-7" action="" method="">
          <div class="text-center mb-4">
            <h1 class="h3 mb-3 font-weight-normal">Login</h1>
          </div>
          <div class="form-label-group">
            <label for="inputEmail">Email</label>
            <input type="text" id="inputEmail" name="email" class="form-control" placeholder="Email" required="" autofocus="" />
          </div>
          <div class="form-label-group">
            <label for="inputPassword">Password</label>
            <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required="" />
          </div>
          <div class="text-center mb-4 text-center">
            <button class="btn btn-lg btn-dark btn-block" type="submit">Sign In</button>
            <p class="alreadyUser">Don't have account? Then just <a href="">Sign-Up</a>!</p>
          </div>
          <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2019.</p>
        </form>
      </div>
    </div>
  `;
}

export function showLoginView() {
  render(loginTemplate());
}

async function onLogin({ password, email }) {
  if (email.length < 3 || password.length < 3) {
    return;
  }

  await login({ password, email });
  updateNav();
  page.redirect("/");
}
