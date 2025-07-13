import { handleCommand } from "./commands.js";
import { appendToLog } from "./utils.js";

// Grab input field and log container
const input = document.getElementById("commandInput");
const form = document.getElementById("commandForm");

// Listen for form submission (Enter key or button click)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const command = input.value.trim();
  if (command) {
    appendToLog(> ${command}, "user");
    handleCommand(command);
    input.value = "";
  }
});
