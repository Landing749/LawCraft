const judgeAI = { ruleOnObjection: (objectionText) => { const text = objectionText.toLowerCase();

if (text.includes("hearsay")) {
  return Math.random() < 0.5
    ? "SUSTAINED. Hearsay is inadmissible."
    : "OVERRULED. Exception applies.";
}
if (text.includes("leading")) {
  return Math.random() < 0.5
    ? "SUSTAINED. Counsel, rephrase."
    : "OVERRULED. Acceptable under context.";
}
if (text.includes("relevance")) {
  return Math.random() < 0.5
    ? "SUSTAINED. Irrelevant to the matter."
    : "OVERRULED. It may connect later.";
}
if (text.includes("opinion")) {
  return Math.random() < 0.5
    ? "SUSTAINED. Witness is not an expert."
    : "OVERRULED. Let them answer.";
}

return "I require a clearer legal basis for this objection.";

} };

export default judgeAI;
