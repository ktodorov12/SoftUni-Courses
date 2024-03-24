import { del, get, post, put } from "./requester.js";

const endpoints = {
  allEvents: "/data/events?sortBy=_createdOn%20desc",
  add: "/data/events",
  request: (id) => `/data/events/${id}`
};

export async function getAllEvents() {
  return await get(endpoints.allEvents);
}

export async function addingEvent(data) {
  await post(endpoints.add, data);
}

export async function getDetailsEvent(id) {
  return await get(endpoints.request(id));
}

export async function editEvent(id, data) {
  await put(endpoints.request(id), data);
}

export async function delEvent(id) {
  await del(endpoints.request(id));
}
