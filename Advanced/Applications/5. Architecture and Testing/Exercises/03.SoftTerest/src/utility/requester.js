import { getUserToken, removeUserData } from "./userHelper.js";

async function requester(method, url, data) {
  const option = {
    method,
    headers: {},
  };

  if (data) {
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
      const err = await response.json();

      if (err.code == 403) {
        removeUserData();
      }
      throw new Error(err.message);
    }

    return await response.json();
  } catch (error) {
    alert(error);
    throw new Error(error);
  }
}

export const get = (url) => requester("get", url);
export const post = (url, data) => requester("post", url, data);
export const put = (url, data) => requester("put", url, data);
export const del = (url) => requester("delete", url);
