import { html, render } from "./node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js";

const root = document.getElementById("contacts");
render(contacts.map(userTemplate), root);

function userTemplate(contact) {
  return html`
    <div class="contact card">
      <div>
        <i class="far fa-user-circle gravatar"></i>
      </div>
      <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button @click=${details} class="detailsBtn">Details</button>
        <div class="details" id=${contact.id}>
          <p>Phone number: ${contact.phoneNumber}</p>
          <p>Email: ${contact.email}</p>
        </div>
      </div>
    </div>
  `;
}

function details(e) {
  const details = e.target.parentElement.querySelector(".details");
  const isHidden = details.style.display == "block" ? "none" : "block"
  details.style.display = isHidden
}
