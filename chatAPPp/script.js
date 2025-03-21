const messageCont = document.querySelector("#message-container");
const messageInput = document.querySelector("#message-input");
const submitBtn = document.querySelector("#submit-btn");
const activeStatus = document.querySelector("#active-status");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const newMessage = document.createElement("li");
  const messageInputValue = messageInput.value;
  newMessage.innerText = messageInputValue;

  messageCont.appendChild(newMessage);
  messageInput.value = ""

  activeStatus.innerText = "online"
});

messageInput.addEventListener("keydown", function() {
    activeStatus.innerText = "typing..."
})
