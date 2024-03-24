import { delEvent, getDetailsEvent } from "../data/events.js";
import { getAllGoings, isUserGoing, postLike } from "../data/goings.js";
import { html, render, page } from "../lib.js";
import { getUserData, getUserId, isOwner } from "../util.js";

function detailsTemplate(event, onDelete, isLogged, hasOwner, onGoing, isGoing, totalGoing) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${event.imageUrl} alt="example1" />
        <p id="details-title">${event.name}</p>
        <p id="details-category">Category: <span id="categories">${event.category}</span></p>
        <p id="details-date">Date:<span id="date">${event.date}</span></p>
        <div id="info-wrapper">
          <div id="details-description">
            <span>${event.description}</span>
          </div>
        </div>

        <h3>Going: <span id="go">${totalGoing}</span> times.</h3>

        <div id="action-buttons">
        ${isLogged 
          ? hasOwner 
            ? html`
                <a href="/edit/${event._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
            : isGoing
                ? null 
                : html`
                <a href="javascript:void(0)" @click=${onGoing} id="go-btn">Going</a>`
          : null}
          </div>
      </div>
    </section>
  `;
}

let context = null
export async function showDetailsView(ctx) {
  context = ctx;
  const id = ctx.params.id;
  const eventDetails = await getDetailsEvent(id);

  const isLogged = getUserData();
  const hasOwner = isOwner(eventDetails._ownerId);
  const isGoing = await isUserGoing(id, getUserId());
  const totalGoing = await getAllGoings(id);

  render(detailsTemplate(eventDetails, onDelete, isLogged, hasOwner, onGoing, isGoing, totalGoing));

  async function onDelete() {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      await delEvent(id);
      page.redirect("/dashboard");
    }
  }

  async function onGoing() {
    await postLike(id);
    showDetailsView(context)
  }
}
