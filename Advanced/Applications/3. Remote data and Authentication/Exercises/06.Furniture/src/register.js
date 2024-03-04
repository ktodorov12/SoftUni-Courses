const registerForm = document.querySelector("form[action='/register']");
const regBtn = registerForm.querySelector("button");

regBtn.addEventListener("click", onRegister);
async function onRegister(e) {
  e.preventDefault();
  const formData = new FormData(registerForm);
  const body = Object.fromEntries(formData.entries());

  try {
    if (body.password !== body.rePass) {
      throw new Error("Password must match");
    }
    const response = await fetch("http://localhost:3030/users/register", {
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
