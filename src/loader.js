export async function loadCase(name) {
  const res = await fetch(cases/${name}.json);
  return await res.json();
}
