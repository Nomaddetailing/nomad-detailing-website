import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createAirtableRecord } from './_airtable';

// Consumer Bookings endpoint
// Expects JSON body matching the payload created in BookingFlow.tsx
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const b = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const fields = {
      // Service Context
      'Service Category': b.service_category === 'premium' ? 'Premium Detailing' : 'Maintenance Detailing',
      'Service Name': b.service_name,
      'Service Variant': b.service_variant ? (
        b.service_variant === '1-year' ? '1 Year' : b.service_variant === '2-year' ? '2 Years' : '3 Years'
      ) : undefined,

      // Vehicle
      'Vehicle Type': b.vehicle_type,
      'Vehicle Condition': b.vehicle_condition,

      // Location & Access
      'Service Area': b.service_area,
      'Property Type': b.property_type,
      // In V1, the frontend collects a single free-text "Notes" field. We store it
      // in both Access Notes and Additional Notes for maximum operational utility.
      'Access Notes': b.notes ?? '',

      // Schedule
      'Preferred Date': b.preferred_date,
      'Preferred Time Window': b.preferred_time_window,

      // Customer
      'Customer Name': b.customer_name,
      'WhatsApp Number': b.customer_whatsapp,
      'Email': b.customer_email ?? '',
      'Additional Notes': b.notes ?? '',

      // Ops
      'Status': 'New',

      //consent
      'Consent Given': !!b.consent_given,
      'Consent Timestamp': b.consent_timestamp,
      'Privacy Policy Version': b.privacy_policy_version,
      'Terms Version': b.terms_version,

    } as Record<string, any>;

    // Remove undefined fields to avoid Airtable validation errors
    Object.keys(fields).forEach((k) => fields[k] === undefined && delete fields[k]);

    const result = await createAirtableRecord({
      tableName: process.env.AIRTABLE_TABLE_BOOKINGS || 'Consumer Bookings',
      fields,
    });

    res.status(200).json({ ok: true, id: result?.id });
  } catch (err: any) {
    res.status(500).json({ ok: false, error: err?.message || 'Unknown error' });
  }
}
