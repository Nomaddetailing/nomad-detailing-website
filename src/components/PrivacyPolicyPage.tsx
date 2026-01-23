import React from "react";
import { Section } from "./ui/Section";

export function PrivacyPolicyPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            At Nomad Detailing, we value and respect your privacy. This Privacy Policy explains how we
            collect, use, and protect your personal data in accordance with the Personal Data Protection Act
            2010 (PDPA).
          </p>
        </div>

        {/* 1. Personal Data We Collect */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">1. Personal Data We Collect</h2>
          <p className="text-muted-foreground">
            When you use our services or submit a booking form, we may collect
            the following information:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Residential address or service location</li>
            <li>Vehicle information (type, condition, service requested)</li>
            <li>Payment information (payment method or uploaded receipts)</li>
          </ul>
        </section>

        {/* 2. Purpose of Collection */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">2. Purpose of Collection</h2>
          <p className="text-muted-foreground">
            Your personal data is collected and used for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>To process and confirm your booking</li>
            <li>To contact you regarding your appointment</li>
            <li>To provide detailing services at your requested location</li>
            <li>To process payments and issue receipts</li>
            <li>To improve our services and customer experience</li>
          </ul>
        </section>

        {/* 3. Disclosure */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">3. Disclosure of Information</h2>
          <p className="text-muted-foreground">
            We do not sell, rent, or trade your personal data. Your information
            may only be disclosed in the following situations:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Where required by law or government authorities</li>
            <li>
              To trusted service providers (such as payment gateways) strictly
              for service-related purposes
            </li>
          </ul>
        </section>

        {/* 4. Data Security */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">4. Data Security</h2>
          <p className="text-muted-foreground">
            Your data is stored securely in our booking systems, including
            Google Forms, Google Sheets, and internal records.
          </p>
          <p className="text-muted-foreground">
            Access to personal data is restricted to authorized team members
            only. Reasonable safeguards are implemented to prevent loss,
            misuse, or unauthorized access.
          </p>
        </section>

        {/* 5. Customer Rights */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">5. Customer Rights</h2>
          <p className="text-muted-foreground">
            In accordance with the PDPA, you have the right to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Access and request a copy of your personal data</li>
            <li>Request correction of inaccurate or outdated information</li>
            <li>
              Withdraw consent for the use of your personal data (subject to
              service limitations)
            </li>
          </ul>
        </section>

        {/* 6. Consent */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">6. Consent</h2>
          <p className="text-muted-foreground">
            By submitting your personal data through our website or booking
            forms, you consent to Nomad Detailing collecting, using, and
            processing your data in accordance with this Privacy Policy and
            the PDPA 2010.
          </p>
        </section>

        {/* 7. Contact */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">7. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions regarding this Privacy Policy or your
            personal data, please contact us:
          </p>
          <div className="text-muted-foreground space-y-1">
            <p>Phone: +60 10 236 0452</p>
            <p>Email: hello@nomaddetailing.com</p>
          </div>
        </section>
      </div>
    </Section>

    <button
      type="button"
      onClick={() => {
        const returnTo = (sessionStorage.getItem("nav:returnTo") as any) || "booking";
        const anchor = sessionStorage.getItem("nav:returnAnchorId") || "";
        onNavigate(returnTo);
    
        // after navigation renders, scroll to anchor
        setTimeout(() => {
          if (!anchor) return;
          document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }}
      className="mt-10 underline text-muted-foreground hover:text-foreground"
    >
      Back to Booking
    </button>

  );
}
