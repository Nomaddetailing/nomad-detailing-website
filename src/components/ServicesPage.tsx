import React from 'react';
import { AlertCircle, Shield, Sparkles, Star, Users, Leaf, Award } from 'lucide-react';
import { Section } from './ui/Section';
import { PrimaryButton } from './ui/PrimaryButton';
import { WhatsAppButton } from './ui/WhatsAppButton';
import type { BookingPreset } from '../App';

interface ServicesPageProps {
  onNavigate: (page: any, preset?: BookingPreset) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const book = (preset: BookingPreset) => onNavigate('booking', preset);

  return (
    <div className="bg-background">
      {/* Page Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl lg:text-5xl tracking-tight">Our Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every service is tailored to your vehicle's unique needs. We use only premium products and proven techniques to deliver exceptional results.
          </p>
        </div>
      </Section>

      {/* Interior & Exterior Detailing */}
      <Section background="subtle">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-4">Interior & Exterior Detailing</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive care that restores cleanliness, comfort, and protection—inside and out.
            </p>
          </div>

          {/* Premium Interior & Exterior Detail */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div>
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl mb-4">Premium Interior & Exterior Detail</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A thorough restoration designed for vehicles that deserve showroom-level care. Ideal for preparing your car for ceramic coating or simply restoring its original brilliance.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-3xl">RM 450</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Final pricing depends on vehicle size, condition, and access.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <PrimaryButton onClick={() => book({ category: 'premium', service: 'premium_interior_exterior_detail' })}>
                  Request Booking
                </PrimaryButton>
                <WhatsAppButton variant="secondary" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">Key Inclusions</h4>
                <div className="space-y-3">
                  {[
                    'Deep interior extraction & odour treatment',
                    'Leather conditioning & protection',
                    'Complete exterior decontamination',
                    'Premium wax or sealant application',
                    'Engine bay detailing & dressing',
                    'Glass polishing for crystal clarity',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interior Detail Only */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 border-t border-border pt-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl mb-4">Interior Detail Only</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep interior restoration focused on cleanliness, comfort, and renewed freshness. Perfect for tackling wear, stains, and odours.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-3xl">RM 280</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Final pricing depends on vehicle size, condition, and access.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <PrimaryButton onClick={() => book({ category: 'premium', service: 'deep_interior_detailing' })}>
                  Request Booking
                </PrimaryButton>
                <WhatsAppButton variant="secondary" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">Key Inclusions</h4>
                <div className="space-y-3">
                  {[
                    'Deep vacuum & extraction cleaning',
                    'Fabric & leather stain removal',
                    'Dashboard & trim restoration',
                    'Odour neutralisation treatment',
                    'Interior glass polishing',
                    'UV protection for surfaces',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Exterior Detail Only */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 border-t border-border pt-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl mb-4">Exterior Detail Only</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete exterior care designed to restore gloss, remove contaminants, and protect your paintwork from the elements.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-3xl">RM 250</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Final pricing depends on vehicle size, condition, and access.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <PrimaryButton onClick={() => book({ category: 'premium', service: 'elite_exterior_finish' })}>
                  Request Booking
                </PrimaryButton>
                <WhatsAppButton variant="secondary" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">Key Inclusions</h4>
                <div className="space-y-3">
                  {[
                    'Full decontamination & clay bar treatment',
                    'Premium hand wash & dry',
                    'Wheel & tire deep clean with dressing',
                    'Paint sealant or wax protection',
                    'Trim & plastic restoration',
                    'Exterior glass polishing',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Wash */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 border-t border-border pt-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl mb-4">Maintenance Wash</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Regular upkeep to maintain that fresh, detailed look between comprehensive services. Ideal for weekly or bi-weekly care.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-3xl">RM 120</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Final pricing depends on vehicle size, condition, and access.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <PrimaryButton onClick={() => book({ category: 'premium', service: 'one_step_paint_correction' })}>
                  Request Booking
                </PrimaryButton>
                <WhatsAppButton variant="secondary" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">Key Inclusions</h4>
                <div className="space-y-3">
                  {[
                    'Exterior hand wash & safe dry',
                    'Quick detail spray or spray wax',
                    'Wheel & tire cleaning with dressing',
                    'Interior vacuum & wipe down',
                    'Glass cleaning inside & out',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Polishing & Paint Correction */}
      <Section>
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-4">Polishing & Paint Correction</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional paint correction to restore clarity, depth, and gloss—tailored to your vehicle's needs.
            </p>
          </div>

          {/* One-Step Paint Correction */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl mb-4">One-Step Paint Correction</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Designed for vehicles with minor swirl marks and light imperfections. A single-stage process that significantly improves gloss and clarity without extensive correction.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Best for: Daily drivers with light to moderate swirling. Expected improvement: 60–75% defect removal.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-3xl">RM 800</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Final pricing depends on vehicle size, condition, and access.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <PrimaryButton onClick={() => book({ category: 'premium', service: 'two_step_paint_correction' })}>
                  Request Booking
                </PrimaryButton>
                <WhatsAppButton variant="secondary" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">What to Expect</h4>
                <div className="space-y-3">
                  {[
                    'Noticeable improvement in paint clarity',
                    'Reduced swirl marks & light scratches',
                    'Enhanced gloss & depth',
                    'Ideal prep for ceramic coating',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Two-Step Paint Correction */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 border-t border-border pt-16">
            <div className="space-y-6">
              <div>
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                  Maximum Correction
                </div>
                <h3 className="text-2xl mb-4">Two-Step Paint Correction</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A comprehensive two-stage process for vehicles with moderate to heavy imperfections. Delivers near-flawless results with maximum gloss and reflection.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Best for: Show cars, premium vehicles, or heavily swirled paint. Expected improvement: 85–95% defect removal.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-3xl">RM 1,500</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Final pricing depends on vehicle size, condition, and access.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <PrimaryButton onClick={() => book({ category: 'premium', service: 'two_step_paint_correction' })}>
                  Request Booking
                </PrimaryButton>
                <WhatsAppButton variant="secondary" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">What to Expect</h4>
                <div className="space-y-3">
                  {[
                    'Near-flawless paint finish',
                    'Maximum swirl & scratch removal',
                    'Deep, mirror-like gloss & reflection',
                    'Show-quality preparation',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Ceramic Coating */}
      <Section background="subtle">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-4">Ceramic Coating</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional-grade ceramic protection that delivers lasting gloss, effortless maintenance, and superior durability.
            </p>
          </div>

          {/* 1-Year Protection */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl mb-4">1-Year Protection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Entry-level ceramic coating ideal for those seeking enhanced gloss and easier maintenance without long-term commitment.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-3xl">RM 1,200</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Final pricing depends on vehicle size, condition, and required paint preparation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <PrimaryButton onClick={() => book({ category: 'premium', service: 'ceramic_coating', variant: '1-year' })}>
                  Request Booking
                </PrimaryButton>
                <WhatsAppButton variant="secondary" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">Benefits</h4>
                <div className="space-y-3">
                  {[
                    'Enhanced gloss & depth',
                    'Hydrophobic water beading',
                    'Easier cleaning & maintenance',
                    'UV & chemical resistance',
                    '12-month durability',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2-Year Protection */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 border-t border-border pt-16">
            <div className="space-y-6">
              <div>
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl mb-4">2-Year Protection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium ceramic coating offering extended durability and superior gloss. Perfect for daily drivers seeking long-term protection.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-3xl">RM 2,000</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Final pricing depends on vehicle size, condition, and required paint preparation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <PrimaryButton onClick={() => book({ category: 'premium', service: 'ceramic_coating', variant: '2-year' })}>
                  Request Booking
                </PrimaryButton>
                <WhatsAppButton variant="secondary" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">Benefits</h4>
                <div className="space-y-3">
                  {[
                    'Superior gloss & mirror finish',
                    'Strong hydrophobic properties',
                    'Reduced wash frequency needed',
                    'Excellent UV & contaminant resistance',
                    '24-month durability',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3-Year Protection */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 border-t border-border pt-16">
            <div className="space-y-6">
              <div>
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                  Maximum Protection
                </div>
                <h3 className="text-2xl mb-4">3-Year Protection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium-grade ceramic coating with maximum durability and gloss. Designed for enthusiasts and collectors who demand the very best.
                </p>
              </div>

              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-3xl">RM 3,200</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Final pricing depends on vehicle size, condition, and required paint preparation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <PrimaryButton onClick={() => book({ category: 'premium', service: 'ceramic_coating', variant: '3-year' })}>
                  Request Booking
                </PrimaryButton>
                <WhatsAppButton variant="secondary" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">Benefits</h4>
                <div className="space-y-3">
                  {[
                    'Maximum gloss & depth of shine',
                    'Extreme hydrophobic performance',
                    'Self-cleaning properties',
                    'Highest chemical & UV resistance',
                    '36-month durability',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Note about paint preparation */}
          <div className="p-6 border border-border bg-background rounded-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Note:</strong> All ceramic coating packages include thorough paint preparation to ensure optimal bonding and longevity. Paint correction may be recommended based on your vehicle's current condition.
            </p>
          </div>
        </div>
      </Section>

      {/* Add-On Services */}
      <Section>
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-4">Add-On Services</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enhance your service with targeted treatments for specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Headlight Restoration */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg mb-2">Headlight Restoration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Professional restoration of clouded or yellowed headlights for improved clarity and safety.
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">From </span>
                <span className="text-lg">RM 180</span>
              </div>
            </div>

            {/* Pet Hair Removal */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg mb-2">Pet Hair Removal</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deep extraction treatment to remove embedded pet hair from seats and carpets.
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">From </span>
                <span className="text-lg">RM 80</span>
              </div>
            </div>

            {/* Odour Removal Treatment */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg mb-2">Odour Removal Treatment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Professional ozone or enzyme treatment for stubborn odours including smoke, pets, or mould.
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">From </span>
                <span className="text-lg">RM 150</span>
              </div>
            </div>

            {/* Leather Conditioning */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg mb-2">Leather Conditioning</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Premium conditioning treatment to restore suppleness and protect leather surfaces.
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">From </span>
                <span className="text-lg">RM 120</span>
              </div>
            </div>

            {/* Engine Bay Detail */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg mb-2">Engine Bay Detail</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thorough cleaning and dressing of the engine compartment for a clean, protected finish.
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">From </span>
                <span className="text-lg">RM 100</span>
              </div>
            </div>

            {/* Wheel Ceramic Coating */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg mb-2">Wheel Ceramic Coating</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ceramic coating for wheels to reduce brake dust buildup and ease cleaning.
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Request for quote</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Maintenance Plans */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl mb-4">Maintenance Plans</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Designed for effortless ongoing maintenance. Ideal for owners who want consistent care without the planning.
            </p>
          </div>

          <div className="p-8 lg:p-12 border border-border bg-background rounded-lg space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our maintenance plans are built for convenience and consistency. Whether you prefer weekly, bi-weekly, or monthly care, we'll ensure your vehicle stays in exceptional condition year-round.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Plans are customised based on your vehicle type, usage patterns, and service preferences.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm text-muted-foreground">From</span>
                <span className="text-3xl">RM 400</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Pricing varies based on service frequency and vehicle requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <WhatsAppButton 
                message="Hi, I'd like to enquire about maintenance plans for my vehicle."
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Trust & Credibility Section */}
      <Section>
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-4">Why Choose Nomad Detailing</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Premium service built on expertise, quality products, and genuine care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Professional-Grade Products */}
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Sparkles className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg mb-2">Professional-Grade Products</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use only premium, proven products trusted by professionals worldwide.
                </p>
              </div>
            </div>

            {/* Certified Expertise */}
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Award className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg mb-2">Certified Expertise</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Trained and certified in advanced detailing techniques and paint correction.
                </p>
              </div>
            </div>

            {/* Mobile Convenience */}
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Shield className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg mb-2">Mobile Convenience</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Premium service delivered to your location—home, office, or wherever suits you.
                </p>
              </div>
            </div>

            {/* Personalised Care */}
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg mb-2">Personalised Care</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every vehicle receives tailored attention based on its unique needs and condition.
                </p>
              </div>
            </div>

            {/* Eco-Conscious Practices */}
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Leaf className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg mb-2">Eco-Conscious Practices</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Water-efficient methods and environmentally responsible products.
                </p>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Star className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-lg mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We stand behind our work with clear communication and genuine accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* High-Value Vehicle Disclaimer */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 lg:p-8 border border-primary/30 bg-primary/5 rounded-lg">
            <div className="flex gap-4">
              <AlertCircle className="text-primary flex-shrink-0 mt-1" size={24} />
              <div className="space-y-2">
                <h3 className="text-primary">High-Value & Specialty Vehicles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vehicles with specialty finishes, custom paintwork, PPF, matte coatings, or high-value components will undergo a pre-service inspection. Any existing defects or sensitivities will be discussed prior to service to ensure the appropriate approach is taken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-6 py-12 border-y border-border">
          <h2 className="text-3xl lg:text-4xl">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground">
            Request a booking or reach out to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <PrimaryButton onClick={() => onNavigate('booking')}>
              Request Booking
            </PrimaryButton>
            <WhatsAppButton variant="secondary" />
          </div>
        </div>
      </Section>
    </div>
  );
}
