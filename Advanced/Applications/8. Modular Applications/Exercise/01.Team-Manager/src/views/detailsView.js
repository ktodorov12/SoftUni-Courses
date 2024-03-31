import { deleteTeam, getDetailsTeam, getTeamMembers } from "../data/teams.js";
import { approveMember, cancelMember, userQuitTeam, requestToBeMember, ownerRemoveUser, requestForPending } from "../data/teamRequester.js"
import { html, page, render } from "../lib.js";
import { getUserData, isOwner } from "../util.js";

function detailsTemplate(team) {
  return html`
    <section id="team-home">
      <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col" />
        <div class="tm-preview">
          <h2>${team.name}</h2>
          <p>${team.description}</p>
          <span class="details">${team.members.length} Members</span>
          ${team.userData
            ? html`
            <div>
              ${team.isOwner
                ? html`
                  <a href="/edit/${team._id}" class="action">Edit team</a>
                  <a href="javascript:void(0)" @click=${team.onDelete} class="action">Delete team</a>`
                : team.isMember
                  ? html`<a href="javascript:void(0)" @click=${() => userQuitTeam(team, "members")} class="action invert">Leave team</a>`
                  : team.isPending
                    ? html`Membership pending. <a href="/javascript:void(0)" @click=${(e) => { e.preventDefault(); userQuitTeam(team, "pending") }}>Cancel request</a>`
                    : html`<a href="javascript:void(0)" @click=${() => requestToBeMember(team._id)} class="action">Join team</a>`
              }
            </div>`
            : null}
        </div>
        <div class="pad-large">
          <h3>Members</h3>
          <ul class="tm-members">
            ${team.members.map(m => isUserMember(team, m))}
          </ul>
        </div>
          ${team.isOwner
          ? html `
          <div class="pad-large">
            <h3>Membership Requests</h3>
            ${team.pending.length > 0
              ? html`
                <ul class="tm-members">
                  ${team.pending.map(pendingMembers)}
                </ul>`
              : html`
                <p class="tm-members">
                  No request yet.
                </p>`}
          </div>`
          : null}
      </article>
    </section>
  `;
}

function isUserMember (team, member) {
  const userUsername = team.userData?.username;
  const memberUsername = member?.user.username;

  return userUsername == memberUsername 
  ? html`<li>${userUsername}</li>`
  : html`<li>${memberUsername}
          ${team.isOwner 
            ? html`<a href="javascript:void(0)" @click=${() => ownerRemoveUser(team, memberUsername)} class="tm-control action">Remove from team</a>` 
            : null}
          </li>`
}

function pendingMembers(member) {
  return html`
  <li>${member.user.username}
    <a href="javascript:void(0)" @click=${requestForPending(approveMember, member)} class="tm-control action">Approve</a>
    <a href="javascript:void(0)" @click=${requestForPending(cancelMember, member)} class="tm-control action">Decline</a>
  </li>
  `
}


export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const teamDetails = await getDetailsTeam(id);
  const allMembers = await getTeamMembers(id);
  
  teamDetails.members = allMembers.filter(m => m.status == "member");
  teamDetails.pending = allMembers.filter(m => m.status == "pending");
  teamDetails.userData = getUserData();
  teamDetails.isOwner = isOwner(teamDetails._ownerId);
  teamDetails.isPending = teamDetails.pending.some(m => m._ownerId == teamDetails.userData?._id);
  teamDetails.isMember = teamDetails.members.some(m => m._ownerId == teamDetails.userData?._id && teamDetails.isOwner == false);
  teamDetails.onDelete = async function() {
    await deleteTeam(id);
    page.redirect("/dashboard");
  }

  render(detailsTemplate(teamDetails));
}