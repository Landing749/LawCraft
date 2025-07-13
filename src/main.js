import { handleCommand } from "./commands.js";
import { print } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("command");

  if (!input) {
    console.error("❌ Command input not found in DOM!");
    return;
  }

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const cmd = input.value.trim();
      input.value = "";
      if (cmd.length > 0) {
        print(> ${cmd});
        handleCommand(cmd);
      }
    }
  });
});
