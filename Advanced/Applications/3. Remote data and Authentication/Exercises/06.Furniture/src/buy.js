async function buy(e) {
  e.preventDefault();
  const funitureTable = document.querySelector(".table");
  const tRows = funitureTable.querySelectorAll("tbody tr");

  const checkedBoxes = Array.from(tRows).filter((row) => {
    const box = row.querySelector("input[type='checkbox']");
    if (box.checked == true) {
      return row;
    }
  });

  const userData = JSON.parse(sessionStorage.getItem("user"));
  const token = userData.accessToken;

  if (checkedBoxes.length > 0) {
    checkedBoxes.forEach(async (box) => {
      const [name, price, factor] = box.querySelectorAll("p");
      const url = "http://localhost:3030/data/orders";

      const body = {
        name: name.textContent,
        price: price.textContent,
        factor: factor.textContent,
      };

      try {
        const response = await fetch(url, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": token,
          },
          body: JSON.stringify(body),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
      } catch (error) {
        alert(error);
      }
    });
  }
}

export { buy };
