window.addEventListener("load", solve);

function solve() {
  let nameRef = document.getElementById("snowman-name");
  let heightRef = document.getElementById("snowman-height");
  let locationRef = document.getElementById("location");
  let creatorRef = document.getElementById("creator-name");
  let specialRef = document.getElementById("special-attribute");

  const addBtn = document.querySelector(".add-btn");
  addBtn.addEventListener("click", onClick);

  const body = document.querySelector(".body")
  const main = document.getElementById("hero");
  const form = document.querySelector("form");
  const previewUl = document.querySelector(".snowman-preview");
  const snowListUl = document.querySelector(".snow-list"); 

  function onClick(e) {
    e.preventDefault();

    let vals = {
      name: nameRef.value,
      height: heightRef.value,
      location: locationRef.value,
      creator: creatorRef.value,
      special: specialRef.value,
    };

    const check = Object.values(vals).some((val) => val == "");
    if (check) {
      return;
    }

    let li = createLi("snowman-info", vals);

    let div = createEl("div");
    div.classList.add("btn-container")
  
    const editBtn = createButton("edit-btn", "Edit", () => onEdit(vals));
    const nextBtn = createButton("next-btn", "Next", () => nextFunc(vals));
    appender(div, editBtn, nextBtn);

    li.appendChild(div);
    previewUl.appendChild(li);

    form.reset();
    addBtn.disabled = true;
  }

  function onEdit(v) {
  nameRef.value = v.name;
  heightRef.value = v.height;
  locationRef.value = v.location;
  creatorRef.value = v.creator;
  specialRef.value = v.special;

  previewUl.innerHTML = "";
  addBtn.disabled = false;
  }

  function nextFunc(v) {
  previewUl.innerHTML = "";

  const sendBtn = createButton("send-btn", "Send", sendFunc);
  let li = createLi("snowman-content", v, sendBtn );

  snowListUl.appendChild(li);
  }

  function sendFunc() {
    const img = document.getElementById("back-img");
    main.remove();
    img.hidden = false;

    const backBtn = createButton("back-btn", "Back", backFunc);
    body.appendChild(backBtn);
  }

  function backFunc() {
    location.reload();
  }

  function createEl(type, content) {
    let el = document.createElement(type);
    if (content) {
      el.textContent = content;
    }
    return el;
  }

  function createButton(className, text, listener) {
    const btn = createEl("button", text);
    btn.classList.add(className);
    btn.addEventListener("click", listener);
    return btn;
  }

  function createLi(liClass, vals, btnInArt) {
    let li = createEl("li");
    li.classList.add(liClass);

    let article = createEl("article");

    const createP = (val) => createEl("p", val);
    const paraName = createP(`Name: ${vals.name}`);
    const paraHeight = createP(`Height: ${vals.height}`);
    const paraLocation = createP(`Location: ${vals.location}`);
    const paraCreator = createP(`Creator: ${vals.creator}`);
    const paraAttribute = createP(`Attribute: ${vals.special}`);
    appender(article, paraName, paraHeight, paraLocation, paraCreator, paraAttribute);

    if(btnInArt) {
      article.appendChild(btnInArt);
    }

    li.appendChild(article);
    return li;
  }

  function appender(parent, ...children) {
    children.forEach((child) => parent.appendChild(child));
  }
}
