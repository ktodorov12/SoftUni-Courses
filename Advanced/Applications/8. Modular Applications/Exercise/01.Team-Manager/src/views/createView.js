import { addingData } from "../data/teams.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

//TODO add html template
function templateForCreateForm() {
  return html`>`;
}

export function showCreateView() {
  render(templateForCreateForm());
}

//TODO check logic
async function onCreate(data) {
  const check = Object.values(data).some((x) => x == "");
  if (check) {
    return alert("All fields requiered");
  }

  await addingData(data);
  page.redirect("dashboard");
}
