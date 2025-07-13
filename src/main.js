import { handleCommand } from "./commands.js";
import { print } from "./utils.js";

const input = document.getElementById("command");

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
