function encodeAndDecodeMessages() {
  const messageText = document.querySelector("#main div:nth-child(1)");
  const senderTextarea = messageText.querySelector("textarea");
  const button = messageText.querySelector("button");

  const recieverRef = document.querySelector("#main div:nth-child(2)");
  const recieverTextarea = recieverRef.querySelector("textarea");
  const recieverButton = recieverRef.querySelector("button");

  button.addEventListener("click", decodeMessage);
  recieverButton.addEventListener("click", encodeMessage);

  let encodedText = "";
  let decodedText = "";

  function decodeMessage() {
    let text = senderTextarea.value;

    for (let letter of text) {
      let number = letter.charCodeAt();
      let encodedLetter = String.fromCharCode(number + 1);
      encodedText += encodedLetter;
    }
    recieverTextarea.value = encodedText;
    senderTextarea.value = "";
  }

  function encodeMessage() {
    for (let letter of encodedText) {
      let number = letter.charCodeAt();
      decodedText += String.fromCharCode(number - 1);
    }
    recieverTextarea.value = "";
    recieverTextarea.value = decodedText;
  }
}

//The password for my bankaccount is 123password321
