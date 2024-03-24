import { editEvent, getDetailsEvent } from "../data/events.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(event, onEdit) {
  return html` <section id="edit">
    <div class="form">
      <h2>Edit Event</h2>
      <form @submit=${createSubmitHandler(onEdit)} class="edit-form">
        <input type="text" name="name" id="name" placeholder="Event" .value=${event.name} />
        <input type="text" name="imageUrl" id="event-image" placeholder="Event Image" .value=${event.imageUrl} />
        <input type="text" name="category" id="event-category" placeholder="Category" .value=${event.category} />

        <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50" .value=${event.description}></textarea>

        <label for="date-and-time">Event Time:</label>
        <input type="text" name="date" id="date" placeholder="When?" .value=${event.date} />

        <button type="submit">Edit</button>
      </form>
    </div>
  </section>`;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const detailsEvent = await getDetailsEvent(id);
  console.log(detailsEvent);
  render(editTemplate(detailsEvent, onEdit));

  async function onEdit(data) {
    const check = Object.values(data).some((x) => x == "");
    if (check) {
      return alert("All fields requiered");
    }
    await editEvent(id, data);
    page.redirect(`/details/${detailsEvent._id}`);
  }
}
