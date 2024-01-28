function create(words) {
  const content = document.getElementById("content");

  const createPara = (textContent) => createElement("p", { textContent });
  const createDiv = (content) => createElement("div", {}, content);

  words.forEach((text) => {
    const p = createPara(text);
    p.style.display = "none";
    const div = createDiv(p);
    content.appendChild(div);

    div.addEventListener("click", show);

    function show() {
      p.style.display = "block";
    }
  });
  
  function createElement(type, attr, content) {
    const element = document.createElement(type);
  
    if (attr) Object.assign(element, attr);
    if (content !== undefined) element.appendChild(content)
    return element;
  }
}
