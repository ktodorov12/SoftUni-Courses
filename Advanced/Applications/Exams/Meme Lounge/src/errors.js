import { html, render } from "./lib.js";

const root = document.getElementById("notifications");

function notificationTemplate(message, type) {
  return html`
    <div @click=${remove} id=${type} class="notification">
      <span>${message}</span>
    </div>
  `;
}

export async function showNotification(message, type) {
  const notification = notificationTemplate(message, type);

  const subst = document.createElement("div");
  render(notification, subst);
  const el = subst.firstElementChild;
  el.style.display = "inline-block";
  root.appendChild(el);

  setTimeout(() => remove(el), 3000);
}

function remove(el) {
  root.removeChild(el);
}
