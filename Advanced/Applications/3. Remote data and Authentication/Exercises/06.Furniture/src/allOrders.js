async function allOrders(e) {
  e.preventDefault();

  let [bought, total] = document.querySelectorAll(".orders p span");

  const userData = JSON.parse(sessionStorage.getItem("user"));
  const userId = userData._id;

  try {
    const response = await fetch("http://localhost:3030/data/orders/");
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    let buffer = [];
    let resultBuffer = 0;

    const correspondingBoxes = data.filter((a) => a._ownerId == userId);
    correspondingBoxes.forEach((element) => {
      const { name, price } = element;
      buffer.push(name);
      resultBuffer += Number(price);
    });

    bought.textContent = buffer.join(", ");
    total.textContent = `${resultBuffer} $`;
  } catch (error) {
    alert(error);
  }
}

export { allOrders };
