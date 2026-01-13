import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createAirtableRecord } from './_airtable';

// Fleet Enquiries endpoint
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const f = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const fields: Record<string, any> = {
      'Company Name': f.company_name,
      'Contact Person': f.contact_person,
      'WhatsApp Number': f.whatsapp_number,
      'Email': f.email ?? '',
      'Number of Vehicles': f.number_of_vehicles,
      'Service Frequency': f.service_frequency,
      'Locations': f.locations ?? '',
      'Notes': f.notes ?? '',
      'Status': 'New',
    };

    Object.keys(fields).forEach((k) => fields[k] === undefined && delete fields[k]);

    const result = await createAirtableRecord({
      tableName: process.env.AIRTABLE_TABLE_FLEET || 'Fleet Enquiries',
      fields,
    });

    res.status(200).json({ ok: true, id: result?.id });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err?.message || 'Unknown error' });
  }
}
