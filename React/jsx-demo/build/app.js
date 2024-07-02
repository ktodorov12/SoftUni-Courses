//Get root HTMl Element
var rootHtmlElement = document.getElementById("root");
console.dir(rootHtmlElement);

// Initialize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element
var headingReactSectionElement = React.createElement(
  "header",
  { className: "navigation", id: "site-header" },
  React.createElement(
    "h1",
    null,
    "Hello JSX"
  ),
  React.createElement(
    "h2",
    null,
    "JSX awesome"
  ),
  React.createElement("p", null)
);

//Render content
rootReactElement.render(headingReactSectionElement);