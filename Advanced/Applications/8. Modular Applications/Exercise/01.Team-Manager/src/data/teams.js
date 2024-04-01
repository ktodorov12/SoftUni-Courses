import { del, get, post, put } from "./requester.js";

const endpoints = {
  allData: "/data/teams",
  list: "/data/members?where=status%3D%22member%22",
  add: "/data/teams",
  paginationData: (page) => `/data/teams?offset=${page}&pageSize=1`,
  request: (id) => `/data/teams/${id}`,
  myTeams: (userId) => `/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`,
  teamMembers: (teamId) => `/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`
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

export async function getDetailsTeam(id) {
  return await get(endpoints.request(id));
}

export async function editTeam(id, data) {
  await put(endpoints.request(id), data);
}

export async function deleteTeam(id) {
  await del(endpoints.request(id));
}

export async function getMyTeams(userId) {
  return await get(endpoints.myTeams(userId));
}

export async function getTeamMembers(teamId) {
  return await get(endpoints.teamMembers(teamId));
}

export async function getTeamByPage(page) {
  return await get(endpoints.paginationData(page));
}