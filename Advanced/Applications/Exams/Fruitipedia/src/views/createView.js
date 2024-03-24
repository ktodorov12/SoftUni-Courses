import { addFruit } from "../data/fruits.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function templateForCreateForm() {
  return html` <section id="create">
    <div class="form">
      <h2>Add Fruit</h2>
      <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input type="text" name="name" id="name" placeholder="Fruit Name" />
        <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
        <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
        <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
        <button type="submit">Add Fruit</button>
      </form>
    </div>
  </section>`;
}

export function showCreateView() {
  render(templateForCreateForm());
}

async function onCreate(data) {
  const check = Object.values(data).some(x => x == "");
  if(check) {
    return alert("All fields requiered");
  }
  
  await addFruit(data);
  page.redirect("/dashboard");
}
