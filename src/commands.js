import { print } from "./utils.js";
import { loadCase } from "./loader.js";

let currentCase = null;

export function handleCommand(cmd) {
  const parts = cmd.toLowerCase().split(" ");

  if (parts[0] === "loadcase" && parts[1]) {
    const caseName = parts[1];
    loadCase(caseName).then((data) => {
      currentCase = data;
      data.intro.forEach(print);
    }).catch(() => {
      print("❌ Failed to load case.");
    });
  } else if (parts[0] === "view" && parts[1] === "metadata" && parts[2]) {
    if (!currentCase) return print("⚠️ Load a case first.");
    const id = parts.slice(2).join(" ");
    const evidence = currentCase.evidence.find(e => e.id === id);
    if (!evidence) return print("⚠️ Evidence not found.");
    print(Metadata for ${evidence.name}:);
    Object.entries(evidence.metadata).forEach(([k, v]) => {
      print(- ${k}: ${v});
    });
  } else {
    print("❓ Unknown command.");
  }
}
