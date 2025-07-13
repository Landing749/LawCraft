export function printToTerminal(text, role = "") { const log = document.getElementById("log"); const line = document.createElement("div"); line.textContent = text;

if (role === "judge") line.style.color = "#d43f3f"; else if (role === "witness") line.style.color = "#3f51b5"; else if (role === "juror") line.style.color = "#00897b"; else if (role === "prosecutor") line.style.color = "#ff9800"; else if (role === "system") line.style.color = "#aaaaaa";

log.appendChild(line); log.scrollTop = log.scrollHeight; }

export function loadJSON(path, callback) { fetch(path) .then((res) => { if (!res.ok) throw new Error(Failed to load ${path}); return res.json(); }) .then((data) => callback(data)) .catch((err) => printToTerminal("⚠️ " + err.message, "system")); }
