import { getActiveTabURL } from "./utils.js";
document.addEventListener("DOMContentLoaded", async () => {
  const button = document.getElementById("submit");
  const message = document.getElementById("message");
  const numbers = document.getElementById("numbers");
  button.addEventListener("click", () =>{
    alert(message.value);
  })
});

