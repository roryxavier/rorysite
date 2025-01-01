export async function loadRes(src: Promise<{ default: string }>): Promise<string> {
  const res = await src;
  return res.default;
}
