// src/components/TermsPage.tsx
import React from "react";
import { Section } from "./ui/Section";

export function TermsPage() {
  return (
    <div>
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm text-muted-foreground mb-3 tracking-wider uppercase">
              Legal
            </p>
            <h1 className="text-4xl lg:text-5xl tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground mt-4">
              These Terms & Conditions apply to bookings and services provided by Nomad Detailing.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 lg:p-10 space-y-8">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">1. Booking Confirmation</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>All bookings are considered as requests until confirmed by our team.</li>
                <li>We will contact you via WhatsApp within 24 hours to confirm your slot.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">2. Water & Electricity Access</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Customers are required to provide access to an outdoor water outlet and plug point.</li>
                <li>If unavailable, please inform us in advance so we can arrange our own equipment.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">3. Cancellations & Rescheduling</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Cancellations must be made at least 24 hours before the booking time.</li>
                <li>Last-minute cancellations (less than 24 hours) may result in loss of deposit.</li>
                <li>Rescheduling is allowed with at least 12 hours’ notice, subject to slot availability.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">4. Service Conditions</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Prices may vary depending on vehicle size, condition, and extra services requested.</li>
                <li>Additional charges may apply for heavy stains, pet hair, or excessive dirt.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">5. Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will take utmost care during service, but Nomad Detailing is not liable for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Pre-existing damage</li>
                <li>Normal wear and tear</li>
                <li>Aftermarket accessories</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">6. Payment</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>
                  Payment must be made in full upon completion of the service (unless a deposit was requested).
                </li>
                <li>Accepted methods: Cash, Bank Transfer, E-Wallet.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold">7. Weather Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                In case of bad weather, appointments may be rescheduled for safety and service quality.
              </p>
            </section>

            <p className="text-xs text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
