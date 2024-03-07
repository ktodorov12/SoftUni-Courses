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

    const data = await response.json()
    return data;
  } catch (error) {
    alert(error);
  }
}
