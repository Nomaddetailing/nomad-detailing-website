// api/fleet.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { randomUUID } from 'crypto';
import { appendToGoogleSheet } from './_sheets';

const ALLOWED = {
    service_frequency: ['one-off', 'monthly', 'weekly', 'ad-hoc'] as const,
    status: ['new', 'contacted', 'quoted', 'won', 'lost'] as const,
} as const;

function isAllowed<K extends keyof typeof ALLOWED>(
    key: K,
    value: any
): value is (typeof ALLOWED)[K][number] {
    return (ALLOWED[key] as readonly any[]).includes(value);
}

function safeStr(v: any) {
    return typeof v === 'string' ? v.trim() : '';
}

function normalizeWhatsapp(v: any) {
    return safeStr(v).replace(/\s+/g, '');
}

function normalizeServiceFrequency(v: any) {
    // Accept "Monthly", "MONTHLY", " monthly " etc.
    return safeStr(v).toLowerCase();
}

function normalizeStatus(v: any) {
    return safeStr(v).toLowerCase();
}

// Fleet Enquiries endpoint
// Writes a single row into the "corporate_fleet_enquiries" sheet in your Google Sheets workbook
export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({ ok: false, error: 'Method not allowed' });
        return;
    }

    try {
        const f = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

        const errors: string[] = [];

        const company_name = safeStr(f.company_name);
        const contact_person = safeStr(f.contact_person);
        const whatsapp_number = normalizeWhatsapp(f.whatsapp_number);

        if (!company_name) errors.push('company_name is required');
        if (!contact_person) errors.push('contact_person is required');
        if (!whatsapp_number) errors.push('whatsapp_number is required');
        else if (!whatsapp_number.startsWith('+')) {
            errors.push('whatsapp_number should include country code and start with "+" (e.g., +60123456789)');
        }

        const service_frequency = normalizeServiceFrequency(f.service_frequency);
        if (!isAllowed('service_frequency', service_frequency)) {
            errors.push(`service_frequency must be one of: ${ALLOWED.service_frequency.join(', ')}`);
        }

        // Status optional; default to "new"
        const statusRaw = f.status != null ? normalizeStatus(f.status) : '';
        const status = statusRaw ? statusRaw : 'new';
        if (status && !isAllowed('status', status)) {
            errors.push(`status must be one of: ${ALLOWED.status.join(', ')}`);
        }

        // Optional fields
        const email = safeStr(f.email) || '';
        const locations = safeStr(f.locations) || '';
        const notes = safeStr(f.notes) || '';

        const number_of_vehicles =
            f.number_of_vehicles == null || f.number_of_vehicles === ''
                ? ''
                : Number.isFinite(Number(f.number_of_vehicles))
                    ? Number(f.number_of_vehicles)
                    : '';

        if (errors.length) {
            res.status(400).json({ ok: false, errors });
            return;
        }

        const enquiry_id = randomUUID();
        const now = new Date().toISOString();

        const record: Record<string, any> = {
            enquiry_id,
            submitted_at: now,
            source: safeStr(f.source) || 'fleet_page',

            company_name,
            contact_person,
            whatsapp_number,
            email,

            number_of_vehicles,
            service_frequency,
            locations,
            notes,

            status,
            internal_notes: '',
        };

        const result = await appendToGoogleSheet({
            sheet: 'corporate_fleet_enquiries',
            record,
        });

        res.status(200).json({ ok: true, enquiry_id, result });
    } catch (err: any) {
        res.status(500).json({ ok: false, error: err?.message || 'Unknown error' });
    }
}