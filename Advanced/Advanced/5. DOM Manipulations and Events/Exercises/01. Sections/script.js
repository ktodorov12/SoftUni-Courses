function create(words) {
  const content = document.getElementById("content");

  words.forEach((text) => {
    let div = createAndAppendDiv();
    createAndAppendPara(div, text);
  });

  function createAndAppendDiv() {
    let newDiv = document.createElement("div");
    newDiv.addEventListener("click", onClick);
    content.appendChild(newDiv);
    return newDiv;
  }

  function createAndAppendPara(apendingDiv, text) {
    let newPara = document.createElement("p");
    newPara.style.display = "none";
    newPara.textContent = text;
    apendingDiv.appendChild(newPara);

   }

   function onClick(event) {
     event.currentTarget.children[0].style.display = "block";
   }

}
