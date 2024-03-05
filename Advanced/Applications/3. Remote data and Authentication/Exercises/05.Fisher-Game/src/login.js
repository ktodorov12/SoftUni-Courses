const form = document.querySelector("form#login");
const loginBtn = document.querySelector("#login button");
document.getElementById("user").style.display = "none";

const logNavBtn = document.querySelector("#guest #login");
logNavBtn.classList.add("active");
logNavBtn.addEventListener("click", (ev) => ev.preventDefault());

const activeEl = document.querySelector(".active");
activeEl.classList.remove("active");

loginBtn.addEventListener("click", onLogin);
function onLogin(ev) {
  ev.preventDefault();
  const formData = new FormData(form);
  loginRequest(Object.fromEntries(formData.entries()));
}
async function loginRequest(data) {
  const { email, password } = data;
  if (!email || !password) {
    return;
  }

  try {
    const response = await fetch("http://localhost:3030/users/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      sessionStorage.setItem("user", JSON.stringify(data));
      window.location = "index.html";
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    alert(error);
  }
}
