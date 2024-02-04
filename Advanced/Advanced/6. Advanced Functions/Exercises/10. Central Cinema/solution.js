function solve() {
  let nameRef = document.querySelector('input[placeholder="Name"]');
  let hallRef = document.querySelector('input[placeholder="Hall"]');
  let priceRef = document.querySelector('input[placeholder="Ticket Price"]');

  const onScreenRef = document.querySelector("#movies ul");
  const archiveRef = document.querySelector("#archive ul");

  const clearBtn = document
    .querySelector("#archive button")
    .addEventListener("click", (event) => {
      let liEls = Array.from(event.target.previousElementSibling.children);
      liEls.forEach((el) => el.remove());
    });

  let onScreenBtn = document
    .querySelector("#container button")
    .addEventListener("click", (event) => {
      event.preventDefault();
      let name = nameRef.value;
      let hall = hallRef.value;
      let price = Number(priceRef.value);

      if (name && hall && price || price === "0") {
        let li = document.createElement("li");
        let span = createEl("span", name);
        let strong = createEl("strong", `Hall: ${hall}`);
        let div = createDiv(price);
        let btn = createEl("button", "Archive");
        btn.addEventListener("click", archive);

        div.appendChild(btn);
        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);
        onScreenRef.appendChild(li);
      }

      nameRef.value = "";
      hallRef.value = "";
      priceRef.value = "";
    });

  function createEl(type, content) {
    let element = document.createElement(type);
    element.textContent = content;
    return element;
  }

  function createDiv(price) {
    let div = document.createElement("div");
    let strong = createEl("strong", price.toFixed(2));
    let input = createEl("input");
    input.placeholder = "Tickets Sold";
    div.appendChild(strong);
    div.appendChild(input);
    return div;
  }

  function archive(event) {
    let listRef = event.target.parentElement.parentElement;
    const movieName = listRef.querySelector("span").textContent;
    let ticketsSoldRef = listRef.querySelector("input");
    let ticketsPrice = listRef.querySelector("div strong").textContent;

    let totalAmount = 0;
    let sold = Number(ticketsSoldRef.value);

    if (sold) {
      totalAmount += sold * Number(ticketsPrice);
      let li = document.createElement("li");
      let span = createEl("span", movieName);
      let strong = createEl(
        "strong",
        `Total amount: ${totalAmount.toFixed(2)}`
      );
      let btn = createEl("button", "Delete");
      btn.addEventListener("click", deleteEl);

      li.appendChild(span);
      li.appendChild(strong);
      li.appendChild(btn);
      archiveRef.appendChild(li);
      listRef.remove();
    }
  }

  function deleteEl(event) {
    event.target.parentElement.remove();
  }
}
