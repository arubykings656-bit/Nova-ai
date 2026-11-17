

const sendButton = document.querySelector("button");
const input = document.querySelector("input");

function sendMessage() {
  const message = input.value.trim();

  if (!message) return;

  alert("NOVA AI: Hello! I received your message: " + message);

  input.value = "";
}

sendButton.addEventListener("click", sendMessage);
