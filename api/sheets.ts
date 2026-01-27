import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Basic CORS (tighten later if needed)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const scriptUrl = process.env.GSHEET_WEBAPP_URL;
  const token = process.env.GSHEET_API_TOKEN;

  if (!scriptUrl || !token) {
    return res.status(500).json({
      ok: false,
      error: "Missing GSHEET_WEBAPP_URL or GSHEET_API_TOKEN",
    });
  }

  const body = req.body;
  if (!body || typeof body !== "object") {
    return res.status(400).json({ ok: false, error: "Invalid JSON body" });
  }

  // Expect: { table: "...", data: {...} }
  if (!body.table || !body.data) {
    return res.status(400).json({
      ok: false,
      error: "Expected payload: { table, data }",
    });
  }

  try {
    const url = `${scriptUrl}?token=${encodeURIComponent(token)}`;

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await r.text();
    let parsed: any;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = { raw: text };
    }

    if (!r.ok || parsed?.ok === false) {
      return res.status(502).json({
        ok: false,
        error: "Google Sheets write failed",
        details: parsed,
      });
    }

    return res.status(200).json({ ok: true, result: parsed });
  } catch (err) {
    return res.status(500).json({ ok: false, error: String(err) });
  }
}
