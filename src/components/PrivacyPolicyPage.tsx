import React, { useEffect, useMemo, useState } from "react";
import { Section } from "./ui/Section";
import { ChevronDown, ChevronUp, Shield } from "lucide-react";

type Item = {
  id: string;
  title: string;
  defaultOpen?: boolean;
  content: React.ReactNode;
};

type PrivacyPolicyPageProps = {
  onNavigate: (page: any) => void;
};

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  const items: Item[] = useMemo(
    () => [
      {
        id: "pp-collect",
        title: "1. Personal Data We Collect",
        content: (
          <>
            <p className="text-muted-foreground">
              When you use our services or submit a booking form, we may collect the following information:
            </p>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Residential address or service location</li>
              <li>Vehicle information (type, condition, service requested)</li>
              <li>Payment information (payment method or uploaded receipts)</li>
            </ul>
          </>
        ),
      },
      {
        id: "pp-purpose",
        title: "2. Purpose of Collection",
        content: (
          <>
            <p className="text-muted-foreground">Your personal data is collected and used for the following purposes:</p>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
              <li>To process and confirm your booking</li>
              <li>To contact you regarding your appointment</li>
              <li>To provide detailing services at your requested location</li>
              <li>To process payments and issue receipts</li>
              <li>To improve our services and customer experience</li>
            </ul>
          </>
        ),
      },
      {
        id: "pp-disclosure",
        title: "3. Disclosure of Information",
        content: (
          <>
            <p className="text-muted-foreground">
              We do not sell, rent, or trade your personal data. Your information may only be disclosed in the
              following situations:
            </p>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
              <li>Where required by law or government authorities</li>
              <li>To trusted service providers (such as payment gateways) strictly for service-related purposes</li>
            </ul>
          </>
        ),
      },
      {
        id: "pp-security",
        title: "4. Data Security",
        content: (
          <>
            <p className="text-muted-foreground">
              Your data is stored securely in our booking systems, including Google Forms, Google Sheets, and internal
              records.
            </p>
            <p className="text-muted-foreground mt-4">
              Access to personal data is restricted to authorized team members only. Reasonable safeguards are
              implemented to prevent loss, misuse, or unauthorized access.
            </p>
          </>
        ),
      },
      {
        id: "pp-rights",
        title: "5. Customer Rights",
        content: (
          <>
            <p className="text-muted-foreground">In accordance with the PDPA, you have the right to:</p>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access and request a copy of your personal data</li>
              <li>Request correction of inaccurate or outdated information</li>
              <li>Withdraw consent for the use of your personal data (subject to service limitations)</li>
            </ul>
          </>
        ),
      },
      {
        id: "pp-consent",
        title: "6. Consent",
        content: (
          <p className="text-muted-foreground">
            By submitting your personal data through our website or booking forms, you consent to Nomad Detailing
            collecting, using, and processing your data in accordance with this Privacy Policy and the PDPA 2010.
          </p>
        ),
      },
      {
        id: "pp-contact",
        title: "7. Contact Us",
        defaultOpen: true,
        content: (
          <>
            <p className="text-muted-foreground">
              If you have any questions regarding this Privacy Policy or your personal data, please contact us:
            </p>
            <div className="mt-4 text-muted-foreground space-y-2">
              <p>Phone: +60 10 236 0452</p>
              <p>Email: hello@nomaddetailing.com</p>
            </div>
          </>
        ),
      },
    ],
    []
  );

  const allIds = useMemo(() => items.map((i) => i.id), [items]);

  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(items.filter((i) => i.defaultOpen).map((i) => i.id))
  );

  const allExpanded = openIds.size === allIds.length;

  const toggleAll = () => {
    setOpenIds((prev) => {
      if (prev.size === allIds.length) return new Set(items.filter((i) => i.defaultOpen).map((i) => i.id));
      return new Set(allIds);
    });
  };

  const toggleOne = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  useEffect(() => {
    // Optional: scroll to top when entering the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Header Card */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-sm shadow-black/25">
            <div className="flex items-center justify-center mb-5">
              <div className="h-11 w-11 rounded-xl border border-border bg-background/40 flex items-center justify-center">
                <Shield size={20} className="text-muted-foreground" />
              </div>
            </div>

            <div className="text-center space-y-3">
              <h1 className="text-3xl lg:text-4xl tracking-tight">Privacy Policy</h1>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                At Nomad Detailing, we value and respect your privacy. This Privacy Policy explains how we collect,
                use, and protect your personal data in accordance with the Personal Data Protection Act 2010 (PDPA).
              </p>
            </div>

            {/* Meta + Controls */}
            <div className="mt-6 mb-8 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            
              <button
                type="button"
                onClick={toggleAll}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:bg-primary/90 shadow-md shadow-primary/20 transition"
              >
                {allExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                {allExpanded ? "Collapse all" : "Expand all"}
              </button>
            </div>

            {/* Accordion */}
            <div className="mt-8 space-y-4">
              {items.map((item) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className={[
                      "rounded-xl border transition-all",
                      isOpen
                        ? "border-primary/40 bg-background/40 shadow-sm shadow-black/20"
                        : "border-border bg-transparent hover:border-border/80",
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      onClick={() => toggleOne(item.id)}
                      className="w-full flex items-center justify-between gap-4 text-left px-6 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-xl"
                      aria-expanded={isOpen}
                      aria-controls={`${item.id}-content`}
                    >
                      <span className="text-base font-medium">{item.title}</span>
                      <span className="shrink-0 text-muted-foreground">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>

                    {isOpen && (
                      <div id={`${item.id}-content`} className="px-6 pb-6 text-sm leading-relaxed">
                        <div className="h-px bg-border mb-4" />
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 pt-4 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  const returnTo = (sessionStorage.getItem("nav:returnTo") as any) || "booking";
                  const anchor = sessionStorage.getItem("nav:returnAnchorId") || "";
                  onNavigate(returnTo);

                  setTimeout(() => {
                    if (!anchor) return;
                    document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 50);
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm hover:bg-primary/90 shadow-md shadow-primary/20 transition"
              >
                <span>←</span>
                <span>Back to Booking</span>
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
