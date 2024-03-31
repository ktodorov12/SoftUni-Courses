import { page } from "../lib.js";
import { getUserData } from "../util.js";
import { del, post, put } from "./requester.js";

const endpoints = {
  becomeMember: "/data/members",
  membersRequest: (memberRequestId) => `/data/members/${memberRequestId}`,
};

export async function requestToBeMember(teamId) {
  page.redirect(`/details/${teamId}`)
  return await post(endpoints.becomeMember, { teamId });
}

export async function approveMember(memberRequestId, data) {
  data.status = "member";
  await put(endpoints.membersRequest(memberRequestId), data);
}

export async function cancelMember(id) {
  await del(endpoints.membersRequest(id));
}

export function requestForPending(callback, member) {
  return function() {
    callback(member._id, member);
    page.redirect(`/details/${member.teamId}`);
  }
}

export async function userQuitTeam(team, teamKey) {
  const user = getUserData();
  removeUser(team[teamKey], user.username);
}

export async function ownerRemoveUser(team, memberUsername) {
  removeUser(team.members, memberUsername);
}

async function removeUser(members, username) {
  const foundUser = members.find((m) => m.user.username == username);
  await cancelMember(foundUser._id);
  page.redirect(`/details/${foundUser.teamId}`);
}
