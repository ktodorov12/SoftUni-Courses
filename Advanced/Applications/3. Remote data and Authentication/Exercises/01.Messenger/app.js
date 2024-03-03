const url = "http://localhost:3030/jsonstore/messenger";
const textArea = document.getElementById("messages");

attachEvents();
function attachEvents() {
  const sendBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");

  sendBtn.addEventListener("click", sendInfo);
  refreshBtn.addEventListener("click", refreshInfro);
}

async function sendInfo() {
  const authorRef = document.querySelector("input[name='author']");
  const messageRef = document.querySelector("input[name='content']");

  if (!authorRef.value || !messageRef.value) {
    return;
  }
  const body = JSON.stringify({
    author: authorRef.value,
    content: messageRef.value,
  });

  try {
    const response = await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body,
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err);
    }

    authorRef.value = "";
    messageRef.value = "";
    refreshInfro();
  } catch (error) {
    alert(error?.message);
  }
}

async function refreshInfro() {
  try {
    textArea.textContent = "";
    const response = await fetch(url);
    const data = await response.json();

    const res = Object.values(data).reduce(
      (r, { author, content }) => r + `${author}: ${content}\n`,
      ""
    );
    textArea.textContent = res.trim();
  } catch (err) {
    alert(err);
  }
}
