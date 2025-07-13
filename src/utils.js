const logEl = document.getElementById("log");

export function print(text) {
  if (!logEl) return console.error("Log element not found.");

  const roleMap = {
    "judge:": "orange",
    "prosecutor:": "red",
    "defense:": "cyan",
    "witness:": "lightgreen",
    "ghost:": "violet",
    "you:": "#0aff0a",
    "chief:": "#0ff"
  };

  let styled = text;
  for (const role in roleMap) {
    const regex = new RegExp(^${role}, "i");
    if (regex.test(text)) {
      styled = text.replace(regex, <span style="color:${roleMap[role]}">${role.toUpperCase()}</span>);
      break;
    }
  }

  const div = document.createElement("div");
  div.innerHTML = > ${styled};
  logEl.appendChild(div);
  logEl.scrollTop = logEl.scrollHeight;
}
