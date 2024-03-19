import { html, render as litRender } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

const root = document.querySelector("main");

function render(view) {
  litRender(view, root);
}

export { html, render, page };
