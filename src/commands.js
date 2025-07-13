import { loadCase } from "./loader.js";
import { appendToLog, printMetadata } from "./utils.js";
import { judgeObjection } from "../ai/judge.js";
import { witnessResponse } from "../ai/witness.js";
import { jurorThoughts } from "../ai/juror.js";
import { prosecutorReply } from "../ai/prosecutor.js";

let currentCase = null;

export function handleCommand(cmd) {
  const parts = cmd.trim().toLowerCase().split(" ");
  if (!parts.length) return;

  const command = parts[0];

  if (command === "loadcase" && parts.length > 1) {
    const name = parts[1];
    currentCase = loadCase(name);
    if (currentCase) {
      appendToLog(Loaded case: ${currentCase.title}, "system");
      currentCase.intro.forEach((line) => appendToLog(line, "narration"));
    } else {
      appendToLog("❌ Failed to load case.", "error");
    }

  } else if (command === "listcases") {
    fetch("/cases/index.json")
      .then((res) => res.json())
      .then((cases) => {
        appendToLog("📁 Available Cases:", "system");
        cases.forEach((c) => {
          appendToLog(- ${c.id} → ${c.title}, "system");
        });
      })
      .catch(() => appendToLog("⚠️ Could not fetch case list.", "error"));

  } else if (command === "view" && parts[1] === "metadata" && parts.length >= 3) {
    if (!currentCase) return appendToLog("⚠️ Load a case first.", "warning");
    const evidenceId = parts.slice(2).join(" ");
    const ev = currentCase.evidence.find((e) => e.id === evidenceId);
    if (ev) {
      printMetadata(ev);
    } else {
      appendToLog("❌ Evidence not found.", "error");
    }

  } else if (command === "objection") {
    const reason = parts.slice(1).join(" ");
    judgeObjection(reason);

  } else if (command === "askwitness") {
    const question = parts.slice(1).join(" ");
    witnessResponse(question);

  } else if (command === "juryreact") {
    jurorThoughts();

  } else if (command === "askprosecutor") {
    const q = parts.slice(1).join(" ");
    prosecutorReply(q);

  } else {
    appendToLog("❓ Unknown command. Try: listcases, loadcase <id>, objection <type>, view metadata <evidence_id>", "error");
  }
}
