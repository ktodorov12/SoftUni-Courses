const rootHtmlElement = document.getElementById("root");
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

const headigRElement = React.createElement("h1", null, "Hello JSX");
const headingTwoREl = React.createElement("h2", null, "Second heading");
const paraREl = React.createElement("p", { className: "something" }, "Para");
const inpREl = React.createElement("input", { value: "Works" }, "Inpyt");

const heading = React.createElement("header", null, headigRElement, headingTwoREl, paraREl, inpREl);

rootReactElement.render(heading);
