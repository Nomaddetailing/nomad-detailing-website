export function getRequiredEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

type SheetsWritePayload = {
  sheet: string; // e.g. "consumer_bookings" or "corporate_fleet_enquiries"
  record: Record<string, any>;
};

export async function appendToGoogleSheet(params: SheetsWritePayload) {
  const url = getRequiredEnv('GOOGLE_SHEETS_WEBAPP_URL'); // Apps Script Web App URL
  const token = process.env.API_TOKEN || process.env.GOOGLE_SHEETS_API_TOKEN || '';

  // We send token in BOTH header + body for maximum compatibility with your Apps Script.
    const payload = {
        token,
        sheet: params.sheet,
        data: params.record,
    };

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'X-Api-Token': token, 'Authorization': `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(payload),
  });

  const text = await resp.text();
  if (!resp.ok) {
    throw new Error(`Google Sheets webapp error (${resp.status}): ${text}`);
  }

  // Expect JSON, but tolerate plain text "OK"
  try {
    return JSON.parse(text);
  } catch {
    return { ok: true, raw: text };
  }
}
