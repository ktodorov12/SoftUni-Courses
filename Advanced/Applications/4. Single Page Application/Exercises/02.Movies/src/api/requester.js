import { getUserToken, removeUserData } from "../util/userHelper.js";

async function requester(method, url, data) {
  const option = {
    method,
    headers: {},
  };

  if (data !== undefined) {
    option.headers["Content-Type"] = "application/json";
    option.body = JSON.stringify(data);
  }

  const token = getUserToken();
  if (token) {
    option.headers["X-Authorization"] = token;
  }

  try {
    const response = await fetch(url, option);

    if (!response.ok) {
      const error = await response.json();

      if (error.code == 403) {
        removeUserData();
      }

      throw new Error(error.message);
    }

    return await response.json();
  } catch (error) {
    return alert(error);
  }
}

export const get = (url) => requester("get", url);
export const post = (url, data) => requester("post", url, data);
export const put = (url, data) => requester("put", url, data);
export const del = (url) => requester("delete", url);
