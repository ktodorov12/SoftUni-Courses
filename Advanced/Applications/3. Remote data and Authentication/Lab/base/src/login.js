window.addEventListener("load", onLoad);

function onLoad() {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const formData = new FormData(form);
    onLogin(Object.fromEntries(formData.entries()));
  });
}

async function onLogin(data) {
  const email = data.email.trim();
  const password = data.password.trim();

  const url = "http://localhost:3030/users/login";
  try {
    const response = await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const dataFromResponse = await response.json();

    if (response.status === 200) {
      const token = dataFromResponse.accessToken;
      sessionStorage.setItem("user", token);
      window.location.pathname = "/base/index.html";
    } else {
      throw new Error(dataFromResponse.message);
    }
  } catch (err) {
    alert(err.message);
  }
}
