import { login } from "../data/users.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = html`
  <section id="login">
    <article class="narrow">
      <header class="pad-med">
        <h1>Login</h1>
      </header>
      <form @submit=${createSubmitHandler(onLogin)} id="login-form" class="main-form pad-large">
        <div class="error">Error message.</div>
        <label>E-mail: <input type="text" name="email" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <input class="action cta" type="submit" value="Sign In" />
      </form>
      <footer class="pad-small">Don't have an account? <a href="#" class="invert">Sign up here</a></footer>
    </article>
  </section>
`;

export function showLoginView() {
  render(loginTemplate);
}

//TODO check fields
async function onLogin({ email, password }) {
  if (!email || !password) {
    return alert("All fields are requiered");
  }

  await login({ email, password });
  page.redirect("/myTeams");
}
