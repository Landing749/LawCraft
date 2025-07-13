import { print } from "./utils.js";
import { loadCase } from "./loader.js";

let currentCase = null;

export function handleCommand(cmd) {
  if (!cmd) {
    print("⚠️ No command entered.");
    return;
  }

  const parts = cmd.trim().toLowerCase().split(" ");

  if (parts[0] === "loadcase" && parts[1]) {
    const caseName = parts[1];

    loadCase(caseName)
      .then((data) => {
        currentCase = data;
        print(📂 Case "${caseName}" loaded successfully.);
        if (Array.isArray(data.intro)) {
          data.intro.forEach(line => print(line));
        } else {
          print("⚠️ Case has no intro script.");
        }
      })
      .catch((err) => {
        print(❌ Failed to load case "${caseName}": ${err.message});
      });

  } else if (parts[0] === "view" && parts[1] === "metadata" && parts[2]) {
    if (!currentCase) return print("⚠️ No case is currently loaded.");

    const evidenceId = parts.slice(2).join(" ");
    const evidence = currentCase.evidence.find(e => e.id === evidenceId);

    if (!evidence) return print("⚠️ Evidence not found.");

    print(🔍 Metadata for ${evidence.name}:);
    for (let [key, value] of Object.entries(evidence.metadata)) {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      print(- ${label}: ${value});
    }

    if (evidence.metadata.created !== evidence.metadata.modified) {
      print("⚠️ Warning: File has been modified since creation.");
    }

  } else {
    print("❓ Unknown command. Try 'loadcase chapter1' or 'view metadata [id]'.");
  }
}
