// api/bookings.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { randomUUID } from 'crypto';
import { appendToGoogleSheet } from './_sheets';

const ALLOWED = {
    service_category: ['premium', 'maintenance'] as const,
    vehicle_type: ['Sedan', 'SUV', 'MPV', 'Coupe', 'Supercar'] as const,
    vehicle_condition: ['Well maintained', 'Moderate wear', 'Heavy soiling'] as const,
    service_area: ['Kuala Lumpur', 'Petaling Jaya', 'Subang', 'Cheras', 'Puchong', 'Others'] as const,
    property_type: ['Condo', 'Landed', 'Office'] as const,
    preferred_time_window: ['Morning', 'Midday', 'Afternoon'] as const,
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
    // Minimal normalization: remove spaces, keep leading + if present
    // (You can tighten this later to enforce +60 specifically)
    return safeStr(v).replace(/\s+/g, '');
}

function isIsoDateYYYYMMDD(v: any) {
    const s = safeStr(v);
    // Basic YYYY-MM-DD check
    return /^\d{4}-\d{2}-\d{2}$/.test(s);
}

// Consumer Bookings endpoint
// Writes a single row into the "consumer_bookings" sheet in your Google Sheets workbook
export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({ ok: false, error: 'Method not allowed' });
        return;
    }

    try {
        const b = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

        const errors: string[] = [];

        // --- Required fields (non-dropdown) ---
        const service_name = safeStr(b.service_name);
        if (!service_name) errors.push('service_name is required');

        const preferred_date = safeStr(b.preferred_date);
        if (!preferred_date) errors.push('preferred_date is required');
        else if (!isIsoDateYYYYMMDD(preferred_date)) errors.push('preferred_date must be in YYYY-MM-DD format');

        const customer_name = safeStr(b.customer_name);
        if (!customer_name) errors.push('customer_name is required');

        const customer_whatsapp = normalizeWhatsapp(b.customer_whatsapp);
        if (!customer_whatsapp) errors.push('customer_whatsapp is required');
        else if (!customer_whatsapp.startsWith('+')) {
            // Keep this light to avoid rejecting valid local formats; tighten later if you want.
            errors.push('customer_whatsapp should include country code and start with "+" (e.g., +60123456789)');
        }

        // --- Dropdown/preset validation (keeps Sheet dropdown integrity) ---
        if (!isAllowed('service_category', b.service_category)) {
            errors.push(`service_category must be one of: ${ALLOWED.service_category.join(', ')}`);
        }
        if (!isAllowed('vehicle_type', b.vehicle_type)) {
            errors.push(`vehicle_type must be one of: ${ALLOWED.vehicle_type.join(', ')}`);
        }
        if (!isAllowed('vehicle_condition', b.vehicle_condition)) {
            errors.push(`vehicle_condition must be one of: ${ALLOWED.vehicle_condition.join(', ')}`);
        }
        if (!isAllowed('service_area', b.service_area)) {
            errors.push(`service_area must be one of: ${ALLOWED.service_area.join(', ')}`);
        }
        if (b.service_area === 'Others' && !safeStr(b.service_area_other)) {
            errors.push('service_area_other is required when service_area is "Others"');
        }
        if (!isAllowed('property_type', b.property_type)) {
            errors.push(`property_type must be one of: ${ALLOWED.property_type.join(', ')}`);
        }
        if (!isAllowed('preferred_time_window', b.preferred_time_window)) {
            errors.push(`preferred_time_window must be one of: ${ALLOWED.preferred_time_window.join(', ')}`);
        }

        // --- Consent (PDPA-safe default) ---
        const consent = !!b.consent_given;
        if (!consent) errors.push('consent_given must be true (customer must agree to Privacy Policy & Terms)');

        if (errors.length) {
            res.status(400).json({ ok: false, errors });
            return;
        }

        // --- Server-side IDs & timestamps (audit-safe) ---
        const booking_id = randomUUID();
        const now = new Date().toISOString();

        // --- Optional fields ---
        const service_variant = b.service_variant ?? '';
        const service_area_other = b.service_area_other ?? '';
        const customer_email = safeStr(b.customer_email) || '';
        const notes = safeStr(b.notes) || '';

        // source can come from frontend logic; keep a safe default
        const source = safeStr(b.source) || 'direct_booking';

        // Match the exact column headers in your sheet:
        // /Nomad – Enquiries Database.xlsx -> consumer_bookings
        const record: Record<string, any> = {
            booking_id,
            created_at: now,
            source,

            service_category: b.service_category,
            service_name,
            service_variant,

            vehicle_type: b.vehicle_type,
            vehicle_condition: b.vehicle_condition,

            service_area: b.service_area,
            service_area_other,

            property_type: b.property_type,

            preferred_date,
            preferred_time_window: b.preferred_time_window,

            customer_name,
            customer_whatsapp,
            customer_email,

            notes,

            consent_given: true,
            consent_timestamp: now,

            privacy_policy_version: safeStr(b.privacy_policy_version) || '',
            terms_version: safeStr(b.terms_version) || '',

            // Sheet preset values: new, contacted, scheduled, completed, cancelled
            status: 'new',
            internal_notes: '',
        };

        const result = await appendToGoogleSheet({
            sheet: 'consumer_bookings',
            record,
        });

        res.status(200).json({ ok: true, booking_id, result });
    } catch (err: any) {
        res.status(500).json({ ok: false, error: err?.message || 'Unknown error' });
    }
}