import { getAllTeams, getListOfMembers } from "../data/teams.js";
import { html, render } from "../lib.js";

function dashboardTemplate(isLogged) {
  return html`
    <section id="browse">
      <article class="pad-med">
        <h1>Team Browser</h1>
      </article>

      <article class="layout narrow">
        <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
      </article>
    </section>
  `;
}

function cardTemplate(team) {
  return html`
  <article class="layout">
    <img src=${team.logoUrl} class="team-logo left-col" />
    <div class="tm-preview">
      <h2>${team.name}</h2>
      <p>${team.description}</p>
      <span class="details">3 Members</span>
      <div><a href="/details/${team._id}" class="action">See details</a></div>
    </div>
  </article>`;
}

export async function showDashboardView() {
  const allTeams = await getAllTeams();
  const allMembers = await getListOfMembers();
  render(dashboardTemplate());
}
