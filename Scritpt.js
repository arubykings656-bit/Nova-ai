

const sendButton = document.querySelector("button");
const input = document.querySelector("input");

async function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  sendButton.disabled = true;
  sendButton.textContent = "Thinking...";

  try {
    const response = await fetch(
      "https://nova.arubykings656.workers.dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "You are NOVA AI by MESLER TECHNOLOGIES. Be helpful and friendly."
            },
            { role: "user", content: message }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Connection failed");
    }

    alert("NOVA AI: " + data.choices[0].message.content);
    input.value = "";

  } catch (error) {
    alert("NOVA AI: " + error.message);
  } finally {
    sendButton.disabled = false;
    sendButton.textContent = "Send";
  }
}

sendButton.addEventListener("click", sendMessage);

