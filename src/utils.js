import { appendToLog } from "./utils.js";

export async function loadCase(caseId) {
  try {
    const res = await fetch(cases/${caseId}.json);
    if (!res.ok) throw new Error("Case file not found.");
    const data = await res.json();

    appendToLog(✅ Loaded case: ${data.title}, "system");

    if (data.intro && Array.isArray(data.intro)) {
      data.intro.forEach((line) => appendToLog(line, "narration"));
    }

    return data;
  } catch (err) {
    appendToLog(❌ Error loading case: ${err.message}, "error");
    return null;
  }
}
