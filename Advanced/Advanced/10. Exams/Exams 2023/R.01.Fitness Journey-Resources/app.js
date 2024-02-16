window.addEventListener("load", solve);

function solve() {
  let nameRef = document.getElementById("name");
  let emailRef = document.getElementById("email");
  let contactRef = document.getElementById("contact-number");
  let classTypeRef = document.getElementById("class-type");
  let classTimeRef = document.getElementById("class-time");

  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", onNext);

  const body = document.getElementById("body");
  const form = document.querySelector("form");
  const previewUl = document.querySelector(".class-info");
  const confirmUl = document.querySelector(".confirm-class");

  function onNext(e) {
    e.preventDefault();
    let vals = {
      name: nameRef.value,
      email: emailRef.value,
      contact: Number(contactRef.value),
      classType: classTypeRef.value,
      classTime: classTimeRef.value,
    };

    const check = Object.values(vals).some((val) => val == "");

    if (check) {
      return;
    }

    const li = createLi("info-item", vals);

    const editBtn = createBtn("edit-btn", "Edit", () => onEdit(vals));
    const contBtn = createBtn("continue-btn", "Continue", () => contFunc(vals));

    appender(previewUl, li, editBtn, contBtn);
    form.reset();
    nextBtn.disabled = true;
  }

  function onEdit(vals) {
    nameRef.value = vals.name;
    emailRef.value = vals.email;
    contactRef.value = Number(vals.contact);
    classTypeRef.value = vals.classType;
    classTimeRef.value = vals.classTime;

    nextBtn.disabled = false;
    previewUl.innerHTML = "";
  }

  function contFunc(vals) {
    previewUl.innerHTML = "";

    let li = createLi("continue-class", vals);
    const cancelBtn = createBtn("cancel-btn", "Cancel", cancel);
    const confirmBtn = createBtn("confirm-btn", "Confirm", () => confirm(vals));

    appender(li, cancelBtn, confirmBtn);
    confirmUl.appendChild(li);
  }

  function cancel() {
    confirmUl.innerHTML = "";
    nextBtn.disabled = false;
  }

  function confirm(vals) {
    document.getElementById("main").remove();

    const h1 = createEl(
      "h1",
      "Thank you for scheduling your appointment, we look forward to seeing you!"
    );
    h1.setAttribute("id", "thank-you");

    const btn = document.createElement("button");
    btn.setAttribute("id", "done-btn");
    btn.addEventListener("click", function () {
      location.reload();
    });

    appender(body, h1, btn);
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

  function createBtn(btnClass, btnName, btnListener) {
    let btn = createEl("button", btnName);
    btn.classList.add(btnClass);
    btn.addEventListener("click", btnListener);
    return btn;
  }

  function createLi(liClass, vals) {
    let li = createEl("li");
    li.classList.add(liClass);

    const createP = (val) => createEl("p", val);
    let art = createEl("article");
    let paraName = createP(`${vals.name}`);
    let paraEmail = createP(`${vals.email}`);
    let paraContact = createP(`${vals.contact}`);
    let paraClassType = createP(`${vals.classType}`);
    let paraClassTime = createP(`${vals.classTime}`);

    appender(
      art,
      paraName,
      paraEmail,
      paraContact,
      paraClassType,
      paraClassTime
    );
    li.appendChild(art);

    return li;
  }
}
