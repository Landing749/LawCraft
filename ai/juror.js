const jurorAI = { reactToTestimony: (testimony, context) => { const t = testimony.toLowerCase();

if (t.includes("blood") || t.includes("fingerprint")) {
  return "Hmm... that sounds pretty convincing.";
}
if (t.includes("hearsay") || t.includes("unclear")) {
  return "I’m not sure if that’s reliable enough to sway me.";
}
if (t.includes("witness") || t.includes("testified")) {
  return "The witness sounded honest... but I still have doubts.";
}

const thoughts = [
  "I need more facts before I can decide.",
  "This case is tough... both sides have valid points.",
  "I’m leaning one way, but not convinced yet."
];
return thoughts[Math.floor(Math.random() * thoughts.length)];

} };

export default jurorAI;
