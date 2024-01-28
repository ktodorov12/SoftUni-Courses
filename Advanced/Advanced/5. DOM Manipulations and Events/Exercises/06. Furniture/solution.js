function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll("button");
  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  const createImg = (src) => createEl("img", { src });
  const createPara = (textContent) => createEl("p", { textContent });
  const createBox = (type) => createEl("input", { type });

  function generate() {
    let input = this.previousElementSibling;
    let parsedInput = JSON.parse(input.value);

    for (let row of parsedInput) {
      let { img, name, price, decFactor } = row;
      const tr = document.createElement("tr");

      const appendging = (...params) =>
        params.forEach((para) => tr.appendChild(para));
      appendging(
        createImg(img),
        createPara(name),
        createPara(price),
        createPara(decFactor),
        createBox("checkbox")
      );

      document.querySelector("tbody").appendChild(tr);
    }

    input.value = "";
  }

  function buy() {
    let output = this.previousElementSibling;
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');

    let furniture = [];
    let total = 0;
    let avgDevFac = 0;

    const info = (element) => element.children[0].textContent;

    for (let row of checked) {
      let [img, name, price, decFac] = Array.from(row.parentElement.parentElement.children);
      furniture.push(info(name));
      total += Number(info(price));
      avgDevFac += Number(info(decFac));
    }

    let texFruntirue = `Bought furniture: ${furniture.join(", ")}\n`
    let textSum = `Total price: ${total.toFixed(2)}\n`;
    let textFactor = `Average decoration factor: ${avgDevFac / furniture.length}`
    output.value = texFruntirue + textSum + textFactor;
  }

  function createEl(type, content) {
    const td = document.createElement("td");
    let element = document.createElement(type);
    Object.assign(element, content);
    td.appendChild(element);
    return td;
  }
}