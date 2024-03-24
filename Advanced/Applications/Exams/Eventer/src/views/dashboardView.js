import { getAllEvents } from "../data/events.js";
import { html, render } from "../lib.js";

function dashboardTemplate(events) {
  return html`
    <h2>Current Events</h2>
    <section id="dashboard">
      ${events.length > 0 
        ? events.map(eventTemplate)
        : html`<h4>No Events yet.</h4>`}
    </section>
  `;
}

function eventTemplate(event) {
  return html`      
<div class="event">
  <img src=${event.imageUrl} alt="example1" />
  <p class="title">${event.name}</p>
  <p class="date">${event.date}</p>
  <a class="details-btn" href="/details/${event._id}">Details</a>
</div>`;
}

export async function showDashboardView() {
  const allEvents = await getAllEvents();
  render(dashboardTemplate(allEvents));
}
