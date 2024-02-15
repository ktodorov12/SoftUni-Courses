function solution() {
  let employeeRef = document.getElementById("employee");
  let categoryRef = document.getElementById("category");
  let urgencyRef = document.getElementById("urgency");
  let teamRef = document.getElementById("team");
  let descriptionRef = document.getElementById("description");

  let addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", onClick);

  let section = document.querySelector("form");
  let previewUl = document.querySelector(".preview-list");
  let pendingUl = document.querySelector(".pending-list");
  let resolvedUL = document.querySelector(".resolved-list");

  function onClick(event) {
    event.preventDefault();
    let vals = {
      employee: employeeRef.value,
      category: categoryRef.value,
      urgency: urgencyRef.value,
      team: teamRef.value,
      description: descriptionRef.value,
    };

    check =
      vals.employee == "" ||
      vals.category == "" ||
      vals.urgency == "" ||
      vals.team == "" ||
      vals.description == "";

    if (check) {
      return;
    }

    const li = createLi("problem-content", vals);

    const editBtn = createButton("edit-btn", "Edit", () => onEdit(vals));
    const continueBtn = createButton("continue-btn", "Continue", () => continueFunc(vals));

    appender(li, editBtn, continueBtn);

    previewUl.appendChild(li);

    section.reset();
    addBtn.disabled = true;
  }

  function onEdit(vals) {
    previewUl.innerHTML = "";
    addBtn.disabled = false;

    employeeRef.value = vals.employee;
    categoryRef.value = vals.category;
    urgencyRef.value = vals.urgency;
    teamRef.value = vals.team;
    descriptionRef.value = vals.description;
  }

  function continueFunc(vals) {
    previewUl.innerHTML = "";

    let li = createLi("problem-content", vals);

    const resolveBtn = createButton("resolve-btn", "Resolved", () => onResolve(vals));
    li.appendChild(resolveBtn);
    pendingUl.appendChild(li);
  }

  function onResolve(vals) {
    pendingUl.innerHTML = "";

    let li = createLi("problem-content", vals);

    const clearBtn = createButton("clear-btn", "Clear", clear);
    li.appendChild(clearBtn);
    resolvedUL.appendChild(li);
  }

  function clear() {
    resolvedUL.innerHTML = "";
    addBtn.disabled = false;
  }

  function appender(parent, ...children) {
    children.forEach((child) => parent.appendChild(child));
  }

  function createEl(type, content) {
    let el = document.createElement(type);
    if (content) {
      el.textContent = content;
    }
    return el;
  }

  function createButton(className, btnName, eventListener) {
    let btn = createEl("button", btnName);
    btn.classList.add(className);
    btn.addEventListener("click", eventListener);
    return btn;
  }

  function createLi(liClass, vals) {
    let li = createEl("li");
    li.classList.add(liClass);

    let art = createEl("article");
    let employeePara = createEl("p", `From: ${vals.employee}`);
    let categoryPara = createEl("p", `Category: ${vals.category}`);
    let urgencyPara = createEl("p", `Urgency: ${vals.urgency}`);
    let assignedPara = createEl("p", `Assigned to: ${vals.team}`);
    let descriptionPara = createEl("p", `Description: ${vals.description}`);

    appender( art, employeePara, categoryPara, urgencyPara, assignedPara, descriptionPara);
    li.appendChild(art);

    return li;
  }
}
