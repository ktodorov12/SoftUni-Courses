var rootHtmlElement = document.getElementById("root");
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

var headigRElement = React.createElement("h1", null, "Hello JSX");
var headingTwoREl = React.createElement("h2", null, "Second heading");
var paraREl = React.createElement("p", { className: "something" }, "Para");
var inpREl = React.createElement("input", { value: "Works" }, "Inpyt");

var heading = React.createElement("header", null, headigRElement, headingTwoREl, paraREl, inpREl);

rootReactElement.render(heading);