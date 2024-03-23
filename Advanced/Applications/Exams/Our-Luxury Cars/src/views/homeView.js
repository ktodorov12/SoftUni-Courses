import { html, render } from "../lib.js";

const homeTemplate = html`
  <section id="hero">
    <h1>Accelerate Your Passion Unleash the Thrill of Sport Cars Together!</h1>
  </section>
`;

export function showHomeView() {
  render(homeTemplate);
}
