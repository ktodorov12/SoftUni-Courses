import { html, render } from "../lib.js";

const root = document.getElementById("overlay");

export function showOverlay(confirmationText) {
  return new Promise((resolve, reject) => {
    render(overlayTemplate(confirmationText, resolve, reject), root);
  });
}

function overlayTemplate(confirmationText, resolve, reject) {
  return html` 
  <div class="overlay">
    <div class="modal">
      <p>${confirmationText}</p>
      <button @click=${() => handleButtonClick(resolve, true)} class="action">Agree</button>
      <button @click=${() => handleButtonClick(resolve, false)} class="action">Cancel</button>
    </div>
  </div>`;
}

function handleButtonClick(resolve, choice) {
  root.innerHTML = ""; // Clear the overlay content
  resolve(choice); // Resolve the promise with the user's choice
}
