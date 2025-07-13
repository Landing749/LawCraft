import { handleCommand } from "./commands.js";
import { print } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("command");

  if (!input) {
    console.error("Input element not found.");
    return;
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      input.value = "";
      if (cmd) {
        print(> ${cmd});
        handleCommand(cmd);
      }
    }
  });
});
