window.addEventListener("load", loadStudents);
const url = "http://localhost:3030/jsonstore/collections/students";
const formResult = document.querySelector("#results tbody");
const form = document.querySelector("form")

async function loadStudents() {
  try {
    const response = await fetch(url);
    const dataStudents = await response.json();
    Object.values(dataStudents).map(createStudentTd);
  } catch (error) {
    alert(error);
  }
}

function createStudentTd(dataStudents) {
  const tr = document.createElement("tr");
  for (let key in dataStudents) {
    if (key == "_id") continue;

    const th = document.createElement("th");
    th.textContent = dataStudents[key];
    tr.appendChild(th);
  }
  formResult.appendChild(tr);
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  const formData = new FormData(form);
  addNewStudent(Object.fromEntries(formData.entries()));
});

async function addNewStudent(entries) {
  const check = Object.values(entries).some((e) => e == "");
  if (check) {
    return;
  }

  try {
    await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entries),
    });

    formResult.innerHTML = ""
    form.reset();
    loadStudents();
  } catch (error) {
    alert(error);
  }
}
