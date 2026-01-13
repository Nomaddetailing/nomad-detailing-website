import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Section } from './ui/Section';
import { PrimaryButton } from './ui/PrimaryButton';
import { WhatsAppButton } from './ui/WhatsAppButton';
import type { BookingPreset } from '../App';

interface BookingFlowProps {
  onNavigate: (page: any, preset?: BookingPreset) => void;
  preset?: BookingPreset;
}

type FlowStep = 'category' | 'service' | 'vehicle' | 'location' | 'contact' | 'done';

type ServiceCategory = 'premium' | 'maintenance' | null;

interface BookingData {
  // Context
  category: ServiceCategory;
  service: string;
  variant: string;

  // Vehicle
  vehicleType: string;
  condition: string;

  // Location & schedule
  area: string;
  propertyType: string;
  preferredDate: string;
  preferredTime: string;

  // Contact
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const PREMIUM_SERVICES = [
  {
    value: 'deep_interior_detailing',
    title: 'Deep Interior Detailing',
    description: 'Deep extraction, conditioning, and odour neutralisation for a like-new cabin.',
  },
  {
    value: 'elite_exterior_finish',
    title: 'Elite Exterior Finish',
    description: 'Decontamination and protection for a clean, glossy finish.',
  },
  {
    value: 'one_step_paint_correction',
    title: 'One-Step Paint Correction',
    description: 'Restore clarity and gloss with light-to-moderate defect removal.',
  },
  {
    value: 'two_step_paint_correction',
    title: 'Two-Step Paint Correction',
    description: 'Maximum correction for moderate-to-heavy imperfections and near-flawless results.',
  },
  {
    value: 'ceramic_coating',
    title: 'Ceramic Coating',
    description: 'Long-term protection for effortless maintenance and durable gloss.',
    requiresVariant: true,
  },
];

const CERAMIC_VARIANTS = [
  { value: '1-year', title: '1-Year Protection' },
  { value: '2-year', title: '2-Year Protection' },
  { value: '3-year', title: '3-Year Protection' },
];

const MAINTENANCE_SERVICES = [
  {
    value: 'maintenance_wash',
    title: 'Maintenance Wash',
    description: 'A premium wash to keep your vehicle fresh between major details.',
  },
  {
    value: 'ceramic_maintenance_wash',
    title: 'Ceramic Maintenance Wash',
    description: 'Safe wash method designed for coated vehicles.',
  },
  {
    value: 'interior_maintenance',
    title: 'Interior Maintenance',
    description: 'Quick refresh to keep the cabin clean and comfortable.',
  },
  {
    value: 'maintenance_plans_enquiry',
    title: 'Maintenance Plans (Enquiry)',
    description: 'Enquire via WhatsApp for ongoing care plans.',
    enquiryOnly: true,
  },
];

function prettyServiceLabel(data: BookingData) {
  if (!data.service) return '';
  if (data.service === 'ceramic_coating' && data.variant) {
    const v = CERAMIC_VARIANTS.find((x) => x.value === data.variant)?.title ?? data.variant;
    return `Ceramic Coating (${v})`;
  }
  const all = [...PREMIUM_SERVICES, ...MAINTENANCE_SERVICES];
  return all.find((s) => s.value === data.service)?.title ?? data.service;
}

export function BookingFlow({ onNavigate, preset }: BookingFlowProps) {
  const [step, setStep] = useState<FlowStep>('category');

  const [bookingData, setBookingData] = useState<BookingData>({
    category: null,
    service: '',
    variant: '',
    vehicleType: '',
    condition: '',
    area: '',
    propertyType: '',
    preferredDate: '',
    preferredTime: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [showCeramicVariants, setShowCeramicVariants] = useState(false);

  // Initialize from entry preset.
  useEffect(() => {
    if (!preset) {
      setStep('category');
      return;
    }

    // Corporate/Fleet should not use consumer booking.
    if (preset.category === 'corporate') {
      onNavigate('fleet');
      return;
    }

    const initialCategory = (preset.category === 'premium' || preset.category === 'maintenance')
      ? (preset.category as ServiceCategory)
      : null;

    setBookingData((prev) => ({
      ...prev,
      category: initialCategory,
      service: preset.service ?? prev.service,
      variant: preset.variant ?? prev.variant,
    }));

    // If a specific service is pre-selected, jump straight to Vehicle Details.
    if (preset.service) {
      setStep('vehicle');
      return;
    }

    // If only category is selected, go to services within that category.
    if (initialCategory) {
      setStep('service');
      return;
    }

    setStep('category');
  }, [preset, onNavigate]);

  const update = (field: keyof BookingData, value: string) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const stepsForProgress = useMemo(() => {
    // We always show the same milestone steps, but "Service" is considered complete
    // if a preset service was provided.
    return ['Service', 'Vehicle', 'Location', 'Contact'];
  }, []);

  const activeIndex = useMemo(() => {
    const map: Record<FlowStep, number> = {
      category: 0,
      service: 0,
      vehicle: 1,
      location: 2,
      contact: 3,
      done: 4,
    };
    return map[step];
  }, [step]);

  const canContinue = useMemo(() => {
    switch (step) {
      case 'category':
        return true;
      case 'service':
        if (!bookingData.service) return false;
        if (bookingData.service === 'ceramic_coating') return !!bookingData.variant;
        if (bookingData.service === 'maintenance_plans_enquiry') return true;
        return true;
      case 'vehicle':
        return bookingData.vehicleType !== '' && bookingData.condition !== '';
      case 'location':
        return (
          bookingData.area !== '' &&
          bookingData.propertyType !== '' &&
          bookingData.preferredDate !== '' &&
          bookingData.preferredTime !== ''
        );
      case 'contact':
        return bookingData.name !== '' && bookingData.phone !== '';
      default:
        return false;
    }
  }, [step, bookingData]);

  const goNext = async () => {
    // Special: Maintenance Plans (enquiry-only) routes to WhatsApp.
    if (step === 'service' && bookingData.service === 'maintenance_plans_enquiry') {
      // Keep a lightweight record of intent in the UI, but route to WhatsApp.
      window.open('https://wa.me/60189877906?text=Hi%20Nomad%2C%20I%27d%20like%20to%20enquire%20about%20Maintenance%20Plans.', '_blank');
      return;
    }

    const order: FlowStep[] = ['category', 'service', 'vehicle', 'location', 'contact', 'done'];
    const idx = order.indexOf(step);
    if (idx === -1 || idx === order.length - 1) return;
    const next = order[idx + 1];
    setStep(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    const order: FlowStep[] = ['category', 'service', 'vehicle', 'location', 'contact', 'done'];
    const idx = order.indexOf(step);
    if (idx <= 0) return;
    const prev = order[idx - 1];
    setStep(prev);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submit = async () => {
    const payload = {
      service_category: bookingData.category,
      service_name: bookingData.service,
      service_variant: bookingData.variant || null,
      vehicle_type: bookingData.vehicleType,
      vehicle_condition: bookingData.condition,
      service_area: bookingData.area,
      property_type: bookingData.propertyType,
      preferred_date: bookingData.preferredDate,
      preferred_time_window: bookingData.preferredTime,
      customer_name: bookingData.name,
      customer_whatsapp: bookingData.phone,
      customer_email: bookingData.email || null,
      notes: bookingData.notes || null,
      source: preset?.service ? 'services_page' : preset?.category ? 'homepage_category' : 'direct_booking',
      created_at: new Date().toISOString(),
    };

    try {
      const endpoint = import.meta.env.VITE_BOOKING_ENDPOINT as string | undefined;
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        console.log('Booking submitted (no endpoint configured):', payload);
      }
    } catch (e) {
      console.error('Booking submission error:', e);
    }

    setStep('done');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceOptions = bookingData.category === 'premium'
    ? PREMIUM_SERVICES
    : bookingData.category === 'maintenance'
    ? MAINTENANCE_SERVICES
    : [];

  return (
    <div className="bg-background min-h-screen">
      <Section>
        <div className="max-w-3xl mx-auto">
          {/* Progress Indicator */}
          {step !== 'done' && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {[0, 1, 2, 3].map((s) => (
                  <div key={s} className="flex-1">
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                          s < activeIndex
                            ? 'bg-primary border-primary text-primary-foreground'
                            : s === activeIndex
                            ? 'border-primary text-primary'
                            : 'border-border text-muted-foreground'
                        }`}
                      >
                        {s < activeIndex ? <CheckCircle2 size={20} /> : s + 1}
                      </div>
                      {s < 3 && (
                        <div
                          className={`flex-1 h-0.5 mx-2 ${
                            s < activeIndex ? 'bg-primary' : 'bg-border'
                          }`}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                {stepsForProgress.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>
          )}

          {/* Step: Category Selection (only if no category preset) */}
          {step === 'category' && (
            <div className="space-y-8 animate-fade-up">
              <div className="text-center">
                <h1 className="text-3xl lg:text-4xl mb-4">Select a Category</h1>
                <p className="text-xl text-muted-foreground">Choose the service category that fits your needs</p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    value: 'premium',
                    title: 'Premium Detailing',
                    description: 'Interior, exterior, polishing, and ceramic coating options',
                    tag: 'Most popular',
                  },
                  {
                    value: 'maintenance',
                    title: 'Maintenance Detailing',
                    description: 'Ongoing care to keep your vehicle consistently fresh',
                  },
                  {
                    value: 'corporate',
                    title: 'Corporate / Fleet',
                    description: 'Tailored solutions for multiple vehicles',
                  },
                ].map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      if (item.value === 'corporate') {
                        onNavigate('fleet');
                        return;
                      }
                      update('category', item.value as ServiceCategory);
                      // Move directly to services within the chosen category.
                      setStep('service');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full p-6 rounded-lg border-2 text-left transition-all border-border hover:border-primary/50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3>{item.title}</h3>
                          {item.tag && (
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">{item.tag}</span>
                          )}
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                      <ArrowRight className="text-muted-foreground" size={20} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step: Service Selection (category-aware) */}
          {step === 'service' && (
            <div className="space-y-8 animate-fade-up">
              <div className="text-center">
                <h1 className="text-3xl lg:text-4xl mb-4">Select Your Service</h1>
                <p className="text-xl text-muted-foreground">
                  {bookingData.category === 'premium'
                    ? 'Choose a premium service option'
                    : 'Choose a maintenance service option'}
                </p>
              </div>

              {/* Service list */}
              <div className="space-y-4">
                {serviceOptions.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => {
                      update('service', s.value);
                      update('variant', '');
                      if ((s as any).requiresVariant) {
                        setShowCeramicVariants(true);
                      } else {
                        setShowCeramicVariants(false);
                        setStep('vehicle');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={`w-full p-6 rounded-lg border-2 text-left transition-all ${
                      bookingData.service === s.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <h3>{s.title}</h3>
                        {(s as any).enquiryOnly && (
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Enquiry</span>
                        )}
                      </div>
                      <p className="text-muted-foreground">{s.description}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Ceramic duration sub-selection */}
              {showCeramicVariants && bookingData.service === 'ceramic_coating' && (
                <div className="mt-4 p-6 rounded-lg border border-border bg-card space-y-4">
                  <div>
                    <h3 className="text-lg mb-1">Choose your protection duration</h3>
                    <p className="text-sm text-muted-foreground">Select a duration to continue to vehicle details.</p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {CERAMIC_VARIANTS.map((v) => (
                      <button
                        key={v.value}
                        onClick={() => {
                          update('variant', v.value);
                          setStep('vehicle');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          bookingData.variant === v.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-medium">{v.title}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to category only if user came in without preset */}
              <div className="flex items-center justify-between pt-6">
                <button
                  onClick={() => {
                    if (preset?.category) {
                      onNavigate('home');
                      return;
                    }
                    setStep('category');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="mr-2" size={18} /> Back
                </button>

                <PrimaryButton onClick={goNext} disabled={!canContinue || showCeramicVariants}>
                  Continue <ArrowRight className="ml-2" size={20} />
                </PrimaryButton>
              </div>
            </div>
          )}

          {/* Step: Vehicle Details */}
          {step === 'vehicle' && (
            <div className="space-y-8 animate-fade-up">
              <div className="text-center">
                <h1 className="text-3xl lg:text-4xl mb-2">Vehicle Details</h1>
                <p className="text-sm text-muted-foreground">Booking: {prettyServiceLabel(bookingData)}</p>
                <p className="text-xl text-muted-foreground mt-3">Help us understand your vehicle's needs</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="vehicleType" className="block">Vehicle Type *</label>
                  <select
                    id="vehicleType"
                    value={bookingData.vehicleType}
                    onChange={(e) => update('vehicleType', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:border-primary focus:outline-none"
                  >
                    <option value="">Select vehicle type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="MPV">MPV</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Supercar">Supercar</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block">Vehicle Condition *</label>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { value: 'Well maintained', label: 'Well maintained' },
                      { value: 'Moderate wear', label: 'Moderate wear' },
                      { value: 'Heavy soiling', label: 'Heavy soiling' },
                    ].map((c) => (
                      <button
                        key={c.value}
                        onClick={() => update('condition', c.value)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          bookingData.condition === c.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-medium">{c.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <button onClick={goBack} className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeft className="mr-2" size={18} /> Back
                </button>
                <PrimaryButton onClick={goNext} disabled={!canContinue}>
                  Continue <ArrowRight className="ml-2" size={20} />
                </PrimaryButton>
              </div>
            </div>
          )}

          {/* Step: Location & Time */}
          {step === 'location' && (
            <div className="space-y-8 animate-fade-up">
              <div className="text-center">
                <h1 className="text-3xl lg:text-4xl mb-2">Location & Time</h1>
                <p className="text-sm text-muted-foreground">Booking: {prettyServiceLabel(bookingData)}</p>
                <p className="text-xl text-muted-foreground mt-3">Tell us where and when you prefer</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block">Service Area (Klang Valley) *</label>
                  <input
                    value={bookingData.area}
                    onChange={(e) => update('area', e.target.value)}
                    placeholder="e.g. Mont Kiara, Bangsar, PJ, Shah Alam"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block">Property Type *</label>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {['Condo', 'Landed', 'Office'].map((p) => (
                      <button
                        key={p}
                        onClick={() => update('propertyType', p)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          bookingData.propertyType === p ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-medium">{p}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block">Preferred Date *</label>
                    <input
                      type="date"
                      value={bookingData.preferredDate}
                      onChange={(e) => update('preferredDate', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block">Preferred Time Window *</label>
                    <select
                      value={bookingData.preferredTime}
                      onChange={(e) => update('preferredTime', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:border-primary focus:outline-none"
                    >
                      <option value="">Select time window</option>
                      <option value="Morning">Morning</option>
                      <option value="Midday">Midday</option>
                      <option value="Afternoon">Afternoon</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <button onClick={goBack} className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeft className="mr-2" size={18} /> Back
                </button>
                <PrimaryButton onClick={goNext} disabled={!canContinue}>
                  Continue <ArrowRight className="ml-2" size={20} />
                </PrimaryButton>
              </div>
            </div>
          )}

          {/* Step: Contact */}
          {step === 'contact' && (
            <div className="space-y-8 animate-fade-up">
              <div className="text-center">
                <h1 className="text-3xl lg:text-4xl mb-2">Contact Details</h1>
                <p className="text-sm text-muted-foreground">Booking: {prettyServiceLabel(bookingData)}</p>
                <p className="text-xl text-muted-foreground mt-3">We’ll confirm availability via WhatsApp</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block">Name *</label>
                  <input
                    value={bookingData.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block">WhatsApp Number *</label>
                  <input
                    value={bookingData.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="e.g. +60 12-345 6789"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block">Email (optional)</label>
                  <input
                    value={bookingData.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block">Notes (optional)</label>
                  <textarea
                    value={bookingData.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    placeholder="Any access notes, special requests, or vehicle notes"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:border-primary focus:outline-none min-h-[120px]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <button onClick={goBack} className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeft className="mr-2" size={18} /> Back
                </button>
                <PrimaryButton onClick={submit} disabled={!canContinue}>
                  Submit Request <ArrowRight className="ml-2" size={20} />
                </PrimaryButton>
              </div>
            </div>
          )}

          {/* Done */}
          {step === 'done' && (
            <div className="text-center space-y-8 animate-fade-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                <CheckCircle2 className="text-primary" size={40} />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl mb-4">Request Received</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Thanks — we’ll confirm availability shortly via WhatsApp.
                </p>
                <p className="text-sm text-muted-foreground mt-3">Service requested: {prettyServiceLabel(bookingData)}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <PrimaryButton onClick={() => onNavigate('home')}>Back to Home</PrimaryButton>
                <WhatsAppButton text="WhatsApp Us" />
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
