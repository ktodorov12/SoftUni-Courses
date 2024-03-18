import { del, get, post } from "../utility/requester.js";

const BASE_URL = "http://localhost:3030/data/ideas"
const endpoints = {
    dashboard: "?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
    details: (ideaId) => `/${ideaId}`,

}

export async function getAllIdeas() {
    return await get(BASE_URL + endpoints.dashboard);
}

export async function createIdea(data) {
    return await post(BASE_URL, data)
}

export async function detailsIdea(ideaId) {
    return await get(BASE_URL + endpoints.details(ideaId));
}

export async function delIdea(ideaId) {
    return await del(BASE_URL + endpoints.details(ideaId));
}

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();
        const form = event.target;

        const formData = new FormData(form);
        const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        callback(Object.fromEntries(entries));
        form.reset();
    };
}
