const logEl = document.getElementById("log");

export function print(text) {
  const roleMap = {
    "judge:": "orange",
    "prosecutor:": "red",
    "defense:": "cyan",
    "witness:": "lightgreen",
    "ghost:": "violet",
    "you:": "#0aff0a",
    "chief:": "#0ff"
  };

  for (const role in roleMap) {
    const regex = new RegExp(^${role}, "i");
    if (regex.test(text)) {
      const colored = text.replace(
        regex,
        <span style="color:${roleMap[role]}; font-weight:bold;">${role.toUpperCase()}</span>
      );
      logEl.innerHTML += <div>> ${colored}</div>;
      logEl.scrollTop = logEl.scrollHeight;
      return;
    }
  }

  logEl.innerHTML += <div>> ${text}</div>;
  logEl.scrollTop = logEl.scrollHeight;
}
