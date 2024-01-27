function encodeAndDecodeMessages() {
  const [encodeButton, decodeButton] = document.querySelectorAll("button");
  const [encodeArea, decodeArea] = document.querySelectorAll("textarea");

  encodeButton.addEventListener("click", encode);
  decodeButton.addEventListener("click", decode);

  function encode() {
    let text = "";
    let value = encodeArea.value;
    for (let el of value) {
      text += String.fromCharCode(el.charCodeAt() + 1);
    }
    decodeArea.value = text;
    encodeArea.value = "";
  }

  function decode() {
    let text = "";
    let value = decodeArea.value;
    for (let el of value) {
      text += String.fromCharCode(el.charCodeAt() - 1);
    }
    decodeArea.value = text;
  }
}
