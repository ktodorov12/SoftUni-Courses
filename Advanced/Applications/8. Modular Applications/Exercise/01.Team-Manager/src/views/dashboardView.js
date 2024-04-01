import { getAllTeams, getListOfMembers, getTeamByPage } from "../data/teams.js";
import { html, render } from "../lib.js";
import { getUserData } from "../util.js";

function dashboardTemplate(isLogged, team) {
  return html`
    <section id="browse">
      <article class="pad-med">
        <h1>Team Browser</h1>
      </article>
        ${cardTemplate(team)}
      <article class="layout narrow">
        ${isLogged
          ? html`
          <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>`
          : null}
      </article>
    </section>
  `;
}

export function cardTemplate(team) {
  return html`
    <div class="card-wrapper">
      ${paginator(team.page, team.allTeams)}
      <article class="layout card">
        <img src=${team.logoUrl} class="team-logo left-col" />
        <div class="tm-preview">
          <h2>${team.name}</h2>
          <p>${team.description}</p>
          <span class="details">${team.members.length} Members</span>
          <div><a href="/details/${team._id}" class="action">See details</a></div>
        </div>
      </article>
    </div>`;
}

export async function showDashboardView(ctx, next, page = 0) {
  const [allTeams, allMembers, [ singleTeam ]] = await Promise.all([
    getAllTeams(),
    getListOfMembers(),
    getTeamByPage(page)
  ]);
  singleTeam.members = allMembers.filter(member => member.teamId == singleTeam._id);
  singleTeam.page = page;
  singleTeam.allTeams = allTeams.length
  const isLogged = getUserData();
  render(dashboardTemplate(isLogged, singleTeam));
}

function paginator(page, pages){
  return html`
  ${ page > 0 
    ? html`<a @click=${() => showDashboardView(null, null, page - 1)} class="pointer left-pointer">&lt;</a>` 
    : html`<span class="pointer left-pointer-placeholder"></span>`}
  ${ page < pages - 1
    ? html`<a @click=${() => showDashboardView(null, null, page + 1)} class="pointer right-pointer">&gt;</a>` 
    : html`<span class="pointer right-pointer-placeholder"></span>`}
  `
}