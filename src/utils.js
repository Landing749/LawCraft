export function appendToLog(message, role = "system") {
  const logContainer = document.getElementById("log");

  const entry = document.createElement("div");
  entry.className = log-entry ${role};
  entry.textContent = message;

  logContainer.appendChild(entry);
  logContainer.scrollTop = logContainer.scrollHeight;
}

export function printMetadata(evidence) {
  appendToLog(📄 Metadata for ${evidence.name}:, "evidence");
  for (const [key, value] of Object.entries(evidence.metadata)) {
    appendToLog(- ${key}: ${value}, "evidence");
  }
}
