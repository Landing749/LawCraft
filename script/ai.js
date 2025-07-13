// scripts/ai.js

const OPENAI_API_KEY = "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"; // Replace with your actual key

async function queryOpenAI(rolePrompt, userMessage) { const fullPrompt = ${rolePrompt}\n\nUser: ${userMessage}\n${rolePrompt.includes("juror") ? "Juror" : "Response"}:;

const response = await fetch("https://api.openai.com/v1/completions", { method: "POST", headers: { "Content-Type": "application/json", "Authorization": Bearer ${OPENAI_API_KEY} }, body: JSON.stringify({ model: "gpt-3.5-turbo-instruct", prompt: fullPrompt, max_tokens: 200, temperature: 0.7 }) });

const data = await response.json(); return data.choices?.[0]?.text?.trim() || "(no response)"; }

export async function getJudgeResponse(objection) { const prompt = "You are a strict courtroom judge. Respond to the lawyer's objection using legal reasoning."; return await queryOpenAI(prompt, objection); }

export async function getWitnessResponse(question) { const prompt = "You are a cooperative witness in a courtroom. Answer the lawyer's question clearly, with possible emotional undertones."; return await queryOpenAI(prompt, question); }

export async function getJurorReaction() { const prompt = "You are a member of a jury. Describe your internal reaction to the last thing said in the courtroom."; return await queryOpenAI(prompt, "React to previous statement."); }

export async function getProsecutorResponse(context) { const prompt = "You are an experienced prosecutor. Respond persuasively in court using proper legal tone, citing evidence or refuting logic."; return await queryOpenAI(prompt, context); }
