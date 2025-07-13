const logEl = document.getElementById("log");

export function print(text) {
  if (!logEl) {
    console.error("❌ Cannot find element with id='log'");
    return;
  }

  const roleMap = {
    "judge:": "orange",
    "prosecutor:": "red",
    "defense:": "cyan",
    "witness:": "lightgreen",
    "ghost:": "violet",
    "you:": "#0aff0a",
    "chief:": "#0ff"
  };

  let coloredText = text;

  for (const role in roleMap) {
    const regex = new RegExp(^${role}, "i");
    if (regex.test(text)) {
      coloredText = text.replace(
        regex,
        <span style="color:${roleMap[role]}; font-weight:bold;">${role.toUpperCase()}</span>
      );
      break;
    }
  }

  const line = document.createElement("div");
  line.innerHTML = > ${coloredText};
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;
}
