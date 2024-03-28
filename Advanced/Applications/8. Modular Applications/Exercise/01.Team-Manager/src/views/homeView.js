import { html, render } from "../lib.js";
import { getUserData } from "../util.js";

const homeTemplate = (isLogged) => html`
  <section id="home">
    <article class="hero layout">
      <img src="./assets/team.png" class="left-col pad-med" />
      <div class="pad-med tm-hero-col">
        <h2>Welcome to Team Manager!</h2>
        <p>Want to organize your peers? Create and manage a team for free.</p>
        <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
        ${isLogged 
          ? html`<a href="/dashboard" class="action cta">Browse Teams</a>`
          : html`<a href="/login" class="action cta">Sign Up Now</a>`}
      </div>
    </article>
  </section>
`;

export function showHomeView() {
  const isLogged = getUserData();
  render(homeTemplate(isLogged));
}
