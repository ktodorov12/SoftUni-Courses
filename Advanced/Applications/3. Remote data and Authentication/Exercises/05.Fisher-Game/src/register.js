const form = document.querySelector("form#register");
const registerBtn = document.querySelector("#register button");
const logoutBtn = (document.getElementById("logout").style.display = "none");

const regNavBtn = document.querySelector("#guest #register");
regNavBtn.classList.add("active");
regNavBtn.addEventListener("click", (ev) => ev.preventDefault());

const activeEl = document.querySelector(".active");
activeEl.classList.remove("active");

registerBtn.addEventListener("click", onRegister);
function onRegister(ev) {
  ev.preventDefault();
  const formData = new FormData(form);
  loginRequest(Object.fromEntries(formData.entries()));
}

async function loginRequest(data) {
  const { email, password, rePass } = data;
  try {
    if (!email || !password || !rePass) {
      throw new Error("All field must be filled");
    }
    if (password != rePass) {
      throw new Error("Password don't match");
    }
    const response = await fetch("http://localhost:3030/users/register", {
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
