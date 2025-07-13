const prosecutorAI = { respondToStatement: (statement, context) => { const lowered = statement.toLowerCase();
console.log("✅ prosecutor.js loaded");

// Smart rebuttal logic
if (lowered.includes("no evidence")) {
  return "OBJECTION. We have clear evidence submitted, including forensic metadata.";
}
if (lowered.includes("hearsay")) {
  return "Your honor, the witness directly observed the event. It's admissible.";
}
if (lowered.includes("not enough proof")) {
  return "Let me remind the court: fingerprints and blood samples were found on-site.";
}
if (context?.case?.evidence?.length > 0) {
  const sample = context.case.evidence[0];
  return Let's consider the ${sample.name}. ${sample.description};
}

// Fallback general logic
const phrases = [
  "The facts speak for themselves.",
  "We have sufficient grounds to proceed.",
  "No further delays, your honor.",
  "The prosecution rests its case on solid ground."
];
return phrases[Math.floor(Math.random() * phrases.length)];

} };

export default prosecutorAI; \
