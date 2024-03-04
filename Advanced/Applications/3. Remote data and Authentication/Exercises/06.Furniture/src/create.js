import { updateRows } from "./updateRows.js";

async function create(e) {
  e.preventDefault();
  const createForm = document.querySelector("form");

  const formData = new FormData(createForm);
  const body = Object.fromEntries(formData.entries());
  const userData = JSON.parse(sessionStorage.getItem("user"));

  try {
    if (Object.values(body).includes("")) {
      throw new Error("Missing fields");
    }

    const response = await fetch("http://localhost:3030/data/furniture", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": userData.accessToken,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    createForm.reset();
    updateRows(body);
  } catch (error) {
    alert(error);
  }
}

export { create };
