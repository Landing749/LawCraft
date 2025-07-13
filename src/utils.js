export function printToTerminal(text, role = "") { const terminal = document.getElementById("terminal"); const line = document.createElement("div"); line.textContent = text; line.className = role; terminal.appendChild(line); terminal.scrollTop = terminal.scrollHeight; }

export function loadJSON(file, callback) { fetch(file) .then((res) => res.json()) .then((data) => callback(data)) .catch((err) => printToTerminal("Error loading file: " + file)); }
