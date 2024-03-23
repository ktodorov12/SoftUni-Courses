import { del, get, post, put } from "./requester.js"

const endpoints = {
    base: "/data/facts",
    allFacts: "/data/facts?sortBy=_createdOn%20desc",
    requests: (id) => `/data/facts/${id}`
}

export async function getAllFacts() {
    return await get(endpoints.allFacts);
}

export async function addAFact(data) {
    await post(endpoints.base, data)
}

export async function getFactDetail(id) {
    return await get(endpoints.requests(id));
}

export async function editFact(id, data) {
    await put(endpoints.requests(id), data);
}

export async function deleteFact(id) {
    await del(endpoints.requests(id))
}