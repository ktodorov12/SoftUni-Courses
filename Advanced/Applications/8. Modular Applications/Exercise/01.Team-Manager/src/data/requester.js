import { clearUserData, getUserToken } from "../util.js";

const host = "http://localhost:3030";

async function requester(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  const token = getUserToken();
  if (token) {
    options.headers["X-Authorization"] = token;
  }

  try {
    const response = await fetch(host + url, options);

    if (!response.ok) {
      const error = await response.json();

      if (error.code == 403) {
        clearUserData();
      }
      throw new Error(error.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    throw new Error(error);
  }
}

export const get = (url) => requester("get", url);
export const post = (url, data) => requester("post", url, data);
export const put = (url, data) => requester("put", url, data);
export const del = (url) => requester("delete", url);
