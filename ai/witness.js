const witnessAI = { answerQuestion: (question, context) => { const lowered = question.toLowerCase();
console.log("✅ witness.js loaded");

if (lowered.includes("where were you") || lowered.includes("alibi")) {
  return "I was in the library, reading alone. I didn’t hear anything unusual until the screams.";
}
if (lowered.includes("what did you see") || lowered.includes("happen")) {
  return "I saw someone running away from the science lab. They looked tall... maybe wearing a hoodie.";
}
if (lowered.includes("did you recognize")) {
  return "No, their face was hidden. But their shoes... they had a red stripe. I remember that clearly.";
}

// Randomized fallback for realism
const responses = [
  "I... I’m not sure. It all happened so fast.",
  "I’m sorry, I just want to help however I can.",
  "I told everything to the officer already. Do I have to repeat it?"
];

return responses[Math.floor(Math.random() * responses.length)];

} };

export default witnessAI;
