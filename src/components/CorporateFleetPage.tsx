import React, { useRef, useState } from "react";
import { Building2, CalendarClock, ClipboardCheck, ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";
import { PrimaryButton } from "./ui/PrimaryButton";
import { WhatsAppButton } from "./ui/WhatsAppButton";

interface CorporateFleetPageProps {
  onNavigate: (page: any) => void;
}

export function CorporateFleetPage({ onNavigate }: CorporateFleetPageProps) {
  const quoteRef = useRef<HTMLDivElement | null>(null);

const scrollToQuote = () => {
  quoteRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
};

  const [form, setForm] = useState({
    companyName: '',
    contactPerson: '',
    whatsappNumber: '',
    email: '',
    numberOfVehicles: '',
    serviceFrequency: '',
    locations: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submitFleet = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const endpoint = (import.meta.env.VITE_FLEET_ENDPOINT as string | undefined) || '/api/fleet';
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company_name: form.companyName,
          contact_person: form.contactPerson,
          whatsapp_number: form.whatsappNumber,
          email: form.email || null,
          number_of_vehicles: form.numberOfVehicles ? Number(form.numberOfVehicles) : null,
          service_frequency: form.serviceFrequency,
          locations: form.locations || null,
          notes: form.notes || null,
          created_at: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
      setForm({
        companyName: '',
        contactPerson: '',
        whatsappNumber: '',
        email: '',
        numberOfVehicles: '',
        serviceFrequency: '',
        locations: '',
        notes: '',
      });
    } catch (err) {
      console.error('Fleet submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  return (
    <div>
      <Section>
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center space-y-6">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
        Corporate / Fleet
      </p>

      <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.05]">
        Consistent, Accountable Mobile Detailing for Multiple Vehicles
      </h1>

      <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
        Tailored solutions for fleets, dealerships, and property managers — built around reliable scheduling,
        consistent standards, and clear communication.
      </p>

      {/* Support points */}
      <div className="pt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
          {[
            { title: "Reliable scheduling", desc: "Pre-agreed slots with SOP-driven timing." },
            { title: "Consistent standards", desc: "Same checklists, same finish, every visit." },
            { title: "Clear reporting", desc: "Before/after photos + issues flagged early." },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-border bg-card/40 p-6 min-h-[110px]"
            >
              <div className="text-base font-semibold">{x.title}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="pt-2">
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Secondary CTA */}
          <PrimaryButton
            variant="outline"
            onClick={scrollToQuote}
            className="h-12 px-8"
          >
            Get a Quote
          </PrimaryButton>
        
          {/* Primary CTA */}
          <WhatsAppButton
            text="WhatsApp Us"
            className="h-12 px-10 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
          />
        </div>


        <p className="mt-6 text-xs text-muted-foreground text-center">
          Response time: typically within 15–60 minutes during business hours.
        </p>
      </div>
      
    </div>
  </div>
</Section>


      <Section background="subtle">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-xl p-8">
            <Building2 className="text-primary mb-4" size={24} />
            <h3 className="text-xl mb-2">Tailored Programs</h3>
            <p className="text-muted-foreground leading-relaxed">
              Service scopes designed around your vehicle types, usage patterns, and required presentation standards.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8">
            <CalendarClock className="text-primary mb-4" size={24} />
            <h3 className="text-xl mb-2">Scheduling Discipline</h3>
            <p className="text-muted-foreground leading-relaxed">
              Predictable booking windows, capacity planning, and on-site execution that respects operational timelines.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8">
            <ClipboardCheck className="text-primary mb-4" size={24} />
            <h3 className="text-xl mb-2">Consistent Standards</h3>
            <p className="text-muted-foreground leading-relaxed">
              Repeatable processes with clear checks, so every vehicle meets the same expected finish each cycle.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-10 md:p-12">
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
                How Corporate / Fleet Engagement Works
              </h2>
              <p className="text-sm md:text-base text-foreground/70">
                Simple, predictable, and designed for ongoing fleet operations.
              </p>
            </div>
      
            {/* Steps */}
            <div className="mt-8 space-y-5">
              {[
                {
                  n: "1",
                  title: "Share your requirements",
                  desc: "Vehicle count, locations, and frequency requirements.",
                },
                {
                  n: "2",
                  title: "We propose a plan",
                  desc: "A tailored scope, schedule, and service standards.",
                },
                {
                  n: "3",
                  title: "We execute on-site",
                  desc: "Reliable communication and consistent outcomes.",
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-foreground">
                    {item.n}
                  </div>
      
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">{item.title}</div>
                    <div className="text-sm md:text-base text-foreground/70 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
      
            {/* CTA row */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <PrimaryButton onClick={() => onNavigate("contact")}>
                Request a Quote
              </PrimaryButton>
      
              <a
                href="mailto:hello@nomaddetailing.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-foreground/80 hover:text-foreground hover:border-primary/60 transition-colors"
              >
                <span>Email us</span>
                <ArrowRight size={18} />
              </a>
            </div>
      
            {/* Divider + note */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-foreground/60">
                Outside Klang Valley? We can still support you — request a custom quote.
              </p>
            </div>
          </div>
        </div>
      </Section>



      <Section background="subtle">
  <div ref={quoteRef} className="max-w-4xl mx-auto scroll-mt-24">
    <div className="bg-card border border-border rounded-xl p-10">
            <h2 className="text-2xl lg:text-3xl mb-2">Request a Fleet Quote</h2>
            <p className="text-muted-foreground mb-8">
              Share your requirements and we’ll respond via WhatsApp with a tailored scope and schedule.
            </p>

            {submitted ? (
              <div className="p-6 rounded-lg border border-border bg-background">
                <p className="text-lg">Thanks — we’ve received your fleet enquiry.</p>
                <p className="text-muted-foreground mt-2">We’ll follow up via WhatsApp shortly.</p>
              </div>
            ) : (
              <form onSubmit={submitFleet} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm">Company Name *</label>
                    <input
                      name="companyName"
                      value={form.companyName}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm">Contact Person *</label>
                    <input
                      name="contactPerson"
                      value={form.contactPerson}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm">WhatsApp Number *</label>
                    <input
                      name="whatsappNumber"
                      value={form.whatsappNumber}
                      onChange={onChange}
                      required
                      placeholder="e.g. +6012xxxxxxx"
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm">Number of Vehicles *</label>
                    <input
                      type="number"
                      min={1}
                      name="numberOfVehicles"
                      value={form.numberOfVehicles}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm">Service Frequency *</label>
                    <select
                      name="serviceFrequency"
                      value={form.serviceFrequency}
                      onChange={onChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Select frequency</option>
                      <option value="One-off">One-off</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Ad-hoc">Ad-hoc</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm">Locations</label>
                  <input
                    name="locations"
                    value={form.locations}
                    onChange={onChange}
                    placeholder="e.g. PJ + KL, multiple sites"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm">Notes</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={onChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <PrimaryButton type="submit" className="w-full sm:w-auto" disabled={submitting}>
                    {submitting ? 'Submitting…' : 'Submit Enquiry'}
                  </PrimaryButton>
                  <WhatsAppButton text="WhatsApp Us" variant="outline" className="w-full sm:w-auto" />
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
