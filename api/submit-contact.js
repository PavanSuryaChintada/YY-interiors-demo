export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  const sheetUrl = process.env.GOOGLE_SHEET_URL;
  if (!sheetUrl) {
    return res.status(500).json({ ok: false, error: "GOOGLE_SHEET_URL not set in Vercel environment variables" });
  }

  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  try {
    const response = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone: phone || "", message }),
      redirect: "follow",
    });

    const text = await response.text();

    // Try to parse as JSON — Apps Script returns {"success":true} on success
    try {
      const data = JSON.parse(text);
      if (data.success === true) {
        return res.status(200).json({ ok: true });
      }
      // Got JSON but not success — log it
      return res.status(500).json({ ok: false, error: `Apps Script returned: ${text}` });
    } catch {
      // Response wasn't JSON — likely a Google login redirect (HTML)
      // This happens when the Apps Script deployment isn't set to "Anyone"
      return res.status(500).json({
        ok: false,
        error: "Google redirected to login — re-deploy the Apps Script with 'Who has access: Anyone'",
      });
    }
  } catch (e) {
    return res.status(500).json({ ok: false, error: e instanceof Error ? e.message : "Network error" });
  }
}
