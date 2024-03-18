import { html, render } from "../lib.js";
import { getAllIdeas } from "../services/dataService.js";

function dashboardTemplate(ideas) {
  return ideas 
  ? html`<div id="dashboard-holder">${ideas.map(ideaTemplate)}</div>` 
  : html`<h1>No ideas yet! Be the first one :)</h1>`;
}

function ideaTemplate(idea) {
  return html`
    <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
      <div class="card-body">
        <p class="card-text">${idea.title}</p>
      </div>
      <img class="card-image" src="${idea.img}" alt="Card image cap" />
      <a class="btn" href="/ideas/${idea._id}">Details</a>
    </div>
  `;
}

export async function showDashboardView() {
  const allIdeas = await getAllIdeas();
  if (!allIdeas) {
    return render(dashboardTemplate(null));
  }
  render(dashboardTemplate(allIdeas));
}
