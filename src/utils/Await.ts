export async function wait(timeMs = 0) {
	await new Promise((r) => setTimeout(r, timeMs));
}
