import { html, render as litRender } from "../node_modules/lit-html/lit-html.js";
import { classMap } from "../node_modules/lit-html/directives/class-map.js";

const root = document.querySelector(".container");

export function render(view, insideEl = root) {
    litRender(view, insideEl)
}

export {
    html
}
