window.addEventListener("load", solution);

async function solution() {
  const url = "http://localhost:3030/jsonstore/advanced/articles/list";
  const response = await fetch(url);
  const dataOfBoxes = await response.json();
  printBoxes(dataOfBoxes);
}

async function printBoxes(dataOfBoxes) {
  const divs = await Promise.all(
    Object.values(dataOfBoxes).map(async (boxData) => {
      const { _id } = boxData;
      const urlAdditionalData = `http://localhost:3030/jsonstore/advanced/articles/details/${_id}`;
      const receivedResponse = await fetch(urlAdditionalData);
      const contentOfBox = await receivedResponse.json();
      return createBox(contentOfBox);
    })
  );

  const main = document.getElementById("main");
  main.replaceChildren(...divs);
}

function createBox(contentOfBox) {
  const { title, content, _id } = contentOfBox;

  const mainDiv = createEl("div", "", { class: "accordion" });

  const divHead = createEl("div", "", { class: "head" });
  const spanName = createEl("span", title);
  const bttn = createEl("button", "More", { class: "button", id: _id });
  bttn.addEventListener("click", showMore);
  appender(divHead, spanName, bttn);

  const divExtra = createEl("div", "", { class: "extra" });
  const para = createEl("p", content);
  divExtra.appendChild(para);

  appender(mainDiv, divHead, divExtra);
  return mainDiv;
}

function showMore(e) {
  const buttonState = e.target;
  const hiddenContent = e.target.parentElement.parentElement.querySelector(".extra");

  hiddenContent.style.display = buttonState.textContent === "More" ? "block" : "none";
  buttonState.textContent = hiddenContent.style.display === "none" ? "More" : "Less";
}

function createEl(type, content, attributes = {}) {
  const el = document.createElement(type);

  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
  el.textContent = content;
  return el;
}

function appender(parent, ...children) {
  children.forEach((child) => parent.appendChild(child));
}
