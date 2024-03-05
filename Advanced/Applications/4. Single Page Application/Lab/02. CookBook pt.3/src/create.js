window.addEventListener("laod", onLoad);

function onLoad() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const formData = new FormData(form);
    createRecipe(Object.fromEntries(formData.entries()));
  });
}

async function createRecipe(data) {
  const url = "http://localhost:3030/data/recipes";

  try {
    const check = Object.entries(data).find((r) => r[1] == "");
    if (check) {
      throw new Error(`Plese enter ${check[0].toUpperCase()}`);
    }

    const authToken = sessionStorage.getItem("user");
    if (authToken == null) {
      window.location.pathname = "/base/index.html";
      throw new Error("Please login");
    }

    const name = data.name.trim();
    const img = data.img.trim();
    const ingredients = splitAndTrim(data.ingredients);
    const steps = splitAndTrim(data.steps);

    const response = fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": authToken,
      },
      body: JSON.stringify({ name, img, ingredients, steps }),
    });

    if (!response.ok) {
      throw new Error();
    }
    window.location.pathname = "/base/index.html";
  } catch (err) {
    alert(err?.message);
  }
}

function splitAndTrim(data) {
  return data
    .split("\n")
    .map((r) => r.trim())
    .filter((r) => r);
}
