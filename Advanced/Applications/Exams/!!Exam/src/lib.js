import { html, render as baseRender } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { classMap } from "../node_modules/lit-html/directives/class-map.js";


const mainRoot = document.querySelector("main");

function render(view, root = mainRoot) {
  baseRender(view, root);
}

export { html, page, classMap, render };
