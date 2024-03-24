import { addingEvent } from "../data/events.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function templateForCreateForm() {
  return html`
  <section id="create">
    <div class="form">
      <h2>Add Event</h2>
      <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input type="text" name="name" id="name" placeholder="Event" />
        <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL" />
        <input type="text" name="category" id="event-category" placeholder="Category" />

        <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

        <input type="text" name="date" id="date" placeholder="When?" />

        <button type="submit">Add</button>
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
    return alert("All field requiered");
  }

  await addingEvent(data);
  page.redirect("/dashboard");
}
