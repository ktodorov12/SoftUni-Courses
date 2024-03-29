import { register, renderError } from "../data/users.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function registerTemplate(hasError) {
  return html` <section id="register">
    <article class="narrow">
      <header class="pad-med">
        <h1>Register</h1>
      </header>
      <form @submit=${createSubmitHandler(onRegister)} id="register-form" class="main-form pad-large">
        ${hasError 
          ? html`<div class="error">${hasError.message}</div>` 
          : null}
        <label>E-mail: <input type="text" name="email" /></label>
        <label>Username: <input type="text" name="username" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <label>Repeat: <input type="password" name="repass" /></label>
        <input class="action cta" type="submit" value="Create Account" />
      </form>
      <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a></footer>
    </article>
  </section>`;
}

export function showRegisterView() {
  render(registerTemplate(null));
}

async function onRegister({ username, password, email, repass }) {
  if (!password || !email || !repass || !username) {
    return renderError(registerTemplate, "All fields requiered");
  }

  if (password.length < 3) {
    return renderError(registerTemplate, "Password length must be at leas 3 chars");
  }

  if (password !== repass) {
    return renderError(registerTemplate, "Passwords don't match");
  }

  try {
    await register({ username, password, email, repass });
    page.redirect("/myTeams");
  } catch (error) {
    renderError(registerTemplate, error.message);
  }
}