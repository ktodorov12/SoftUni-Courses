export async function request(method, url, data) {
  const option = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (data) {
    option.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, option);

    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  } catch (error) {
    alert(error);
  }
}

export const get = (url) => request("get", url);
export const post = (url, data) => request("post", url, data);
export const put = (url, data) => request("put", url, data);
export const del = (url) => request("delete", url);

export async function getTopics() {
  return get("http://localhost:3030/jsonstore/collections/myboard/posts");
}

export async function getComments() {
  return get(`http://localhost:3030/jsonstore/collections/myboard/comments`)
}
