function solve() {
  const openSection = document.querySelector(".orange").parentElement.nextElementSibling;
  const inProgressSectionDiv = document.getElementById("in-progress");
  const completedSection = document.querySelector(".green").parentElement.nextElementSibling;
  const buttonAdd = document
    .getElementById("add")
    .addEventListener("click", onClick);

  const createStartBtn = () => createBtn("green", "Start", start);
  const createDeleteBtn = () => createBtn("red", "Delete", deleteFunc);
  const createFinishBtn = () => createBtn("orange", "Finish", finish);

  function onClick(event) {
    event.preventDefault();
    const task = document.getElementById("task").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;

    if (task && description && date) {
      let newArt = createArticle(task, description, date);
      let div = createDiv(createStartBtn(), createDeleteBtn());
      newArt.appendChild(div);
      openSection.appendChild(newArt);
    }
  }

  function createArticle(header, desc, date) {
    let art = document.createElement("article");
    let h = createElement("h3", header);
    let description = createElement("p", `Description: ${desc}`);
    let dateEl = createElement("p", `Due Date: ${date}`);

    art.appendChild(h);
    art.appendChild(description);
    art.appendChild(dateEl);
    return art;
  }

  function createElement(type, content, classType) {
    let element = document.createElement(type);
    element.textContent = content;
    if (classType) {
      element.classList.add(classType);
    }
    return element;
  }

  function createBtn(classColor, type, listener) {
    let btn = createElement("button", type, classColor);
    btn.addEventListener("click", listener);
    return btn;
  }

  function createDiv(firstBtn, secondBtn) {
    let div = createElement("div", "", "flex");
    div.appendChild(firstBtn);
    div.appendChild(secondBtn);
    return div;
  }

  function start(event) {
    let artRef = event.target.parentElement.parentElement;
    let buttonsRef = event.target.parentElement;
    inProgressSectionDiv.appendChild(artRef);
    buttonsRef.remove();
    let div = createDiv(createDeleteBtn(), createFinishBtn());
    artRef.appendChild(div);
  }

  function deleteFunc(event) {
    let artRef = event.target.parentElement.parentElement;
    artRef.remove();
  }

  function finish(event) {
    let artRef = event.target.parentElement.parentElement;
    let buttonsRef = event.target.parentElement;
    completedSection.appendChild(artRef);
    buttonsRef.remove();
  }
}
