import { del, get, post, put } from "./requester.js";

const endpoints = {
  allData: "/data/teams",
  list: "/data/members?where=status%3D%22member%22",
  add: "/data/teams",
  request: (id) => ``,
  myTeams: (userId) => `/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateam`,
  becomeMember: "/data/members",
  membersRequest: (memberRequestId) => `/data/members/${memberRequestId}`,
};

export async function getAllTeams() {
  return await get(endpoints.allData);
}

export async function getListOfMembers() {
  return await get(endpoints.list);
}

export async function createTeam(data) {
  return await post(endpoints.add, data);
}

export async function getDetails(id) {
  return await get(endpoints.request(id));
}

export async function edit(id, data) {
  await put(endpoints.request(id), data);
}

export async function deleteItem(id) {
  await del(endpoints.request(id));
}

export async function getMyTeams(userId) {
  return await get(endpoints.myTeams(userId));
}

export async function requestToBeMember(teamId) {
  return await post(endpoints.becomeMember, { teamId });
}

export async function approveMember(memberRequestId, data) {
  await put(endpoints.membersRequest(memberRequestId), data);
}
