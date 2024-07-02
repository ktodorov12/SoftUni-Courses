//Get root HTMl Element
const rootHtmlElement = document.getElementById("root");
console.dir(rootHtmlElement);

// Initialize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element
const headingReactSectionElement = (
  <header className="navigation" id="site-header">
    <h1>Hello JSX</h1>
    <h2>JSX awesome</h2>
    <p></p>
  </header>
);

//Render content
rootReactElement.render(headingReactSectionElement);
