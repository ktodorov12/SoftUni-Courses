import { delMotorcycle, getDetailsMotorcycle } from "../data/motorcycles.js";
import { html, render, page } from "../lib.js";
import { isOwner } from "../util.js";

function detailsTemplate(motor, hasOwner, onDelete) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${motor.imageUrl} alt="example1" />
        <p id="details-title">${motor.model}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="year">Year: ${motor.year}</p>
            <p class="mileage">Mileage: ${motor.mileage} km.</p>
            <p class="contact">Contact Number: ${motor.contact}</p>
            <p id="motorcycle-description">${motor.about}</p>
          </div>
          ${hasOwner
            ? html`<div id="action-buttons">
                <a href="/edit/${motor._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
              </div>`
            : null}
        </div>
      </div>
    </section>
  `;
}

export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const motorDetails = await getDetailsMotorcycle(id);
  const hasOwner = isOwner(motorDetails._ownerId);
  render(detailsTemplate(motorDetails, hasOwner, onDelete));

  async function onDelete() {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      await delMotorcycle(id);
      page.redirect("/dashboard");
    }
  }
}
