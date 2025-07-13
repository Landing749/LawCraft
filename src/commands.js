import { printToTerminal, loadJSON } from "./utils.js"; import { getJudgeResponse, getWitnessResponse, getJurorReaction, getProsecutorResponse } from "./ai.js";

let currentCase = null;

export function handleCommand(input) { const [command, ...args] = input.trim().split(" ");

switch (command.toLowerCase()) { case "loadcase": if (args.length === 0) { printToTerminal("Usage: loadcase [filename]"); return; } loadJSON(cases/${args[0]}.json, (data) => { currentCase = data; printToTerminal(📂 Loaded Case: ${data.title}, "system"); data.intro.forEach((line) => printToTerminal(line)); }); break;

case "view":
  if (args[0] === "metadata" && args[1]) {
    const id = args.slice(1).join(" ");
    const evidence = currentCase?.evidence?.find((e) => e.id === id);
    if (!evidence) {
      printToTerminal("❌ Evidence not found.");
    } else {
      printToTerminal(🔎 Metadata for ${evidence.name});
      for (const [key, value] of Object.entries(evidence.metadata)) {
        printToTerminal(- ${key}: ${value});
      }
    }
  } else {
    printToTerminal("Usage: view metadata [evidence_id]");
  }
  break;

case "objection":
  getJudgeResponse(args.join(" ")).then((res) => printToTerminal(JUDGE: ${res}, "judge"));
  break;

case "askwitness":
  getWitnessResponse(args.join(" ")).then((res) => printToTerminal(WITNESS: ${res}, "witness"));
  break;

case "juryreact":
  getJurorReaction().then((res) => printToTerminal(JUROR: ${res}, "juror"));
  break;

case "prosecute":
  getProsecutorResponse(args.join(" ")).then((res) => printToTerminal(PROSECUTOR: ${res}, "prosecutor"));
  break;

default:
  printToTerminal("❓ Unknown command.");

} }
