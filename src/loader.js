export async function loadCase(name) {
  const res = await fetch(./cases/${name}.json);
  if (!res.ok) throw new Error("Failed to load case.");
  return await res.json();
}
