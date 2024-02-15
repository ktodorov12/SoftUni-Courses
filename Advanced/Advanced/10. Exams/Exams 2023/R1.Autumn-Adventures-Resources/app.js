window.addEventListener("load", solve);

function solve() {
  const time = document.getElementById("time");
  const date = document.getElementById("date");
  const place = document.getElementById("place");
  const event = document.getElementById("event-name");
  const contacts = document.getElementById("email");
  const addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", onClick);

  const inputField = document.querySelector("form");
  const checkList = document.getElementById("check-list");
  const upcomingList = document.getElementById("upcoming-list");
  const finishedList = document.getElementById("finished-list");

  const clearBtn = document
    .getElementById("clear")
    .addEventListener("click", (event) => {
      finishedList.innerHTML = ""
    });

  function onClick() {
    const inputVal = {
      timeVal: time.value,
      dateVal: date.value,
      placeVal: place.value,
      contsVal: contacts.value,
      eventVal: event.value,
    };
    const check =
      inputVal.timeVal != "" &&
      inputVal.dateVal != "" &&
      inputVal.placeVal != "" &&
      inputVal.contsVal != "" &&
      inputVal.eventVal != "";

    if (check) {
      const li = createLi("event-content", inputVal);

      const editBtn = createButton("edit-btn", "Edit", () => onEdit(inputVal));
      const contBtn = createButton("continue-btn", "Continue", () =>
        continueFunc(inputVal)
      );

      appender(li, editBtn, contBtn);
      checkList.appendChild(li);

      inputField.reset();
      addBtn.disabled = true;
    }
  }

  function onEdit(inputVal) {
    time.value = inputVal.timeVal;
    date.value = inputVal.dateVal;
    place.value = inputVal.placeVal;
    event.value = inputVal.eventVal;
    contacts.value = inputVal.contsVal;

    checkList.innerHTML = ""
    addBtn.disabled = false;
  }

  function continueFunc(inputVal) {
    checkList.innerHTML = ""

    const li = createLi("event-content", inputVal);

    const finishBtn = createButton(
      "finished-btn",
      "Move to Finished",
      () => onFinish(li)
    );

    li.appendChild(finishBtn);
    upcomingList.appendChild(li);

    addBtn.disabled = false;
  }

  function onFinish(li) {
    finishedList.appendChild(li);
    let btn = 
    document.querySelector("#finished-list .finished-btn").remove();
  }

  function createEl(type, content) {
    let el = document.createElement(type);
    el.textContent = content;
    return el;
  }

  function createLi(liClass, inputVal) {
    const li = document.createElement("li");
    li.classList.add(liClass);

    const article = document.createElement("article");
    const datePara = createEl(
      "p",
      `Begins: ${inputVal.dateVal} at: ${inputVal.timeVal}`
    );
    const placePara = createEl("p", `In: ${inputVal.placeVal}`);
    const eventPara = createEl("p", `Event: ${inputVal.eventVal}`);
    const contactPara = createEl("p", `Contact: ${inputVal.contsVal}`);
    appender(article, datePara, placePara, eventPara, contactPara);
    li.appendChild(article);

    return li;
  }

  function createButton(className, text, listener) {
    const btn = createEl("button", text);
    btn.classList.add(className);
    btn.addEventListener("click", listener);
    return btn;
  }

  function appender(parent, ...children) {
    children.forEach((child) => parent.appendChild(child));
  }
}
