import { print } from "./utils.js";
import { loadCase } from "./loader.js";

let currentCase = null;

export function handleCommand(cmd) {
  const parts = cmd.toLowerCase().split(" ");

  if (cmd.startsWith("loadcase ")) {
    const caseName = parts[1];
    loadCase(caseName).then((data) => {
      currentCase = data;
      data.intro.forEach(print);
    });
  } else if (cmd.startsWith("view metadata ")) {
    const eid = cmd.split(" ").slice(2).join(" ");
    const evidence = currentCase?.evidence.find(e => e.id === eid);
    if (!evidence) return print("⚠️ Evidence not found.");
    print(Metadata for ${evidence.name}:);
    for (let [k, v] of Object.entries(evidence.metadata)) {
      print(- ${k[0].toUpperCase() + k.slice(1)}: ${v});
    }
    if (evidence.metadata.created !== evidence.metadata.modified) {
      print("⚠️ File has been modified after creation.");
    }
  } else {
    print("⚠️ Unknown command.");
  }
}
