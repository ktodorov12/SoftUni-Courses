import { clearUserData, getUserToken } from "../util";

const host = "hhtp://localhost:3030";

async function requester(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = data;
  }

  const token = getUserToken();
  if (token) {
    options.headers["X-Authorizatin"] = token;
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
    //TODO if error is required
    alert(error);
    throw error;
  }
}

export const get = (url) => requester("get", url);
export const post = (url, data) => requester("post", url, data);
export const put = (url, data) => requester("put", url, data);
export const del = (url) => requester("delete", url);
