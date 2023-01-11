import { getActiveTabURL } from "./utils.js";
document.addEventListener("DOMContentLoaded", async () => {
  const button = document.getElementById("submit");
  const message = document.getElementById("message");
  const numbers = document.getElementById("numbers");
  button.addEventListener("click", () => {
    chrome.runtime.sendMessage(
      { type: "auto", message: message.value, numbers: numbers.value },
      function (response) {
        alert(response);
      }
    );
  });
});
