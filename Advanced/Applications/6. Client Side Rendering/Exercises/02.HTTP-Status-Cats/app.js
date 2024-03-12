import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const root = document.getElementById("allCats");
render(allCatsTemplate(), root);

function allCatsTemplate() {
  return html`
    <ul>
      ${cats.map(catTemplate)}
    </ul>
  `;
}

function catTemplate(cat) {
  return html`
    <li>
      <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap"/>
      <div class="info">
        <button @click=${onClick} class="showBtn">Show status code</button>
        <div class="status" style="display: none" id=${cat.id}>
          <h4>Status Code: ${cat.statusCode}</h4>
          <p>${cat.statusMessage}</p>
        </div>
      </div>
    </li>
  `;
}

function onClick(e) {
    const div = e.target.parentElement.querySelector(".status");
    const isHidden = div.style.display == "block" ? "none" : "block";
    const btnText = isHidden == "none" ? "Show status code" : "Hide status code";
    
    div.style.display = isHidden;
    e.target.textContent = btnText;
}