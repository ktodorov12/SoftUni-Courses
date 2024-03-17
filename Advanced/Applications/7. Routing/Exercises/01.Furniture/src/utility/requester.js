import { clearUserData } from ".././utility/userHelper.js";
import { getUserToken } from "./userHelper.js";

export async function request(method, url, data) {
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
      const error = await response.json();

      if (error.code == 403) {
        clearUserData();
      }
      throw new Error(error.message);
    }

    const dataRes = await response.json();
    return dataRes
  } catch (error) {
    alert(error);
    throw new Error(error);
  }
}

export const get = (url) => request("get", url);
export const post = (url, data) => request("post", url, data);
export const put = (url, data) => request("put", url, data);
export const del = (url) => request("delete", url);
