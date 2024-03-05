window.addEventListener("load", onLoad);

function onLoad() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const formData = new FormData(form);
    onRegister(Object.fromEntries(formData.entries()));
  });
}

async function onRegister(data) {
  if (!data.password || !data.email) {
    throw new Error("All fields are requiered");
  }
  if (data.password != data.rePass) {
    throw new Error("Passwords don't match");
  }

  try {
    const response = await fetch("http://localhost:3030/users/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email.trim(),
        password: data.password.trim(),
      }),
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
