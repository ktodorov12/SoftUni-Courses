function solve() {
  const addButton = Array.from(document.querySelectorAll(".add-product"));
  const output = document.querySelector("textarea");
  const checkoutButton = document.querySelector(".checkout");

  let total = 0;
  let list = new Set();

  addButton.forEach((button) => button.addEventListener("click", onClick));
  checkoutButton.addEventListener("click", checkout);

  function onClick() {
    let parent = this.parentElement.parentElement;
    const productName = parent.querySelector(".product-title").textContent;
    const productPrice = parent.querySelector(".product-line-price").textContent;

    total += Number(productPrice);
    list.add(productName);

    output.value += `Added ${productName} for ${productPrice} to the cart.\n`;
  }

  function checkout() {
    output.value += `You bought ${Array.from(list).join(", ")} for ${total.toFixed(2)}.`;
    addButton.forEach((button) => button.removeEventListener("click", onClick));
    checkoutButton.removeEventListener("click", checkout)
  }
}
