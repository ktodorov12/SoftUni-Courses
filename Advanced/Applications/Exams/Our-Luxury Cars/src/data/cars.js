import { del, get, post, put } from "./requester.js"

const endpoints = {
    base: "/data/cars",
    allCars: "/data/cars?sortBy=_createdOn%20desc",
    CRUD: (id) => `/data/cars/${id}`,
    search: (query) => `/data/cars?where=model%20LIKE%20%22${query}%22`
}

export async function getAllCars() {
    return await get(endpoints.allCars);
}

export async function addANewCar(data) {
    await post(endpoints.base, data)
}

export async function getCarDetails(id) {
    return await get(endpoints.CRUD(id));
}

export async function editCar(id, data) {
    await put(endpoints.CRUD(id), data);
}

export async function deleteCar(id) {
    await del(endpoints.CRUD(id))
}

export async function searchCars(query) {
    return get(endpoints.search(query));
}