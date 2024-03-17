import { html, render as litRender } from  "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"
import { classMap } from "../node_modules/lit-html/directives/class-map.js"

const root = document.querySelector(".container");

function render(view) {
    litRender(view, root)
}

export {
    html, 
    render,
    page,
    classMap
}