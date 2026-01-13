type AirtableCreateRecordPayload = {
  fields: Record<string, any>;
};

export function getRequiredEnv(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return v;
}

export async function createAirtableRecord(params: {
  tableName: string;
  fields: Record<string, any>;
}) {
  const token = getRequiredEnv('AIRTABLE_TOKEN');
  const baseId = getRequiredEnv('AIRTABLE_BASE_ID');

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(params.tableName)}`;
  const payload: AirtableCreateRecordPayload = { fields: params.fields };

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const text = await resp.text();
  if (!resp.ok) {
    throw new Error(`Airtable error (${resp.status}): ${text}`);
  }

  return JSON.parse(text);
}
