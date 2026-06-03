export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const binId = process.env.VITE_JSONBIN_BIN_ID;
  const masterKey = process.env.JSONBIN_MASTER_KEY;

  if (!binId || !masterKey) {
    return res.status(500).json({ ok: false, error: "Server not configured" });
  }

  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
      headers: { "X-Master-Key": masterKey },
    });

    if (!response.ok) {
      return res.status(response.status).json({ ok: false, error: `HTTP ${response.status}` });
    }

    const data = await response.json();
    return res.status(200).json({ ok: true, record: data.record });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e instanceof Error ? e.message : "Network error" });
  }
}
