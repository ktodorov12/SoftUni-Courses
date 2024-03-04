const loginForm = document.querySelector("form[action='/login']");
const loginBtn = loginForm.querySelector("button");

loginBtn.addEventListener("click", onLogin);
async function onLogin(e) {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const body = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("http://localhost:3030/users/login", {
      method: "post",
      headers: { "Option-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    
    sessionStorage.setItem("user", JSON.stringify(data));
    window.location = "homeLogged.html";
  } catch (error) {
    alert(error);
  }
}
