import { del, get, post, put } from "./requester.js";

const endpoints = {
  request: (id) => `/data/products/${id}`,
  add: "/data/products",
  all: "/data/products?sortBy=_createdOn%20desc",
};

export async function getAllProducts() {
  return await get(endpoints.all);
}

export async function addProduct(data) {
  await post(endpoints.add, data);
}

export async function getProductDetails(id) {
  return await get(endpoints.request(id));
}

export async function editProduct(id, data) {
  await put(endpoints.request(id), data);
}

export async function delProduct(id) {
  await del(endpoints.request(id));
}
