import { html } from "../lit.js";
import { createSubmitHandler, saveUserData } from "../data/util.js";
import { render } from "../lit.js";
import { showView } from "../nav.js";
import { login } from "../data/users.js";

const loginTemplate = () => html`
  <section id="login-view">
    <h1>Log in to Movies</h1>
    <form @submit=${createSubmitHandler(onLogin)} id="login-form">
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Login" />
    </form>
  </section>
`;

export function showLoginView() {
  render(loginTemplate());
}

async function onLogin({ email, password }) {
  const userData = await login(email, password);
  saveUserData(userData);

  showView("home");
}
