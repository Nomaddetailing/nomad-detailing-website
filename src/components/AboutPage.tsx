import React from 'react';
import { Award, Shield, Heart, Wrench } from 'lucide-react';
import { Section } from './ui/Section';
import { PrimaryButton } from './ui/PrimaryButton';
import { ProcessStep } from './ui/ProcessStep';

interface AboutPageProps {
  onNavigate: (page: any) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl lg:text-5xl tracking-tight">About Nomad Detailing</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're not just about making cars look good. We're about craftsmanship, precision, and treating every vehicle like it's our own.
          </p>
        </div>
      </Section>

      {/* Brand Story */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl mb-6">Our Philosophy</h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Nomad Detailing was born from a simple belief: your vehicle deserves more than a quick wash. It deserves meticulous care, premium products, and technicians who understand that detailing is both an art and a science.
            </p>
            <p>
              We deliberately limit the number of vehicles we service each day. This isn't a production line—it's precision work. Every scratch corrected, every surface protected, every detail considered. When we're done, your vehicle doesn't just look clean. It looks cared for.
            </p>
            <p>
              Being mobile doesn't mean compromising on quality. We bring professional-grade equipment, premium products, and years of experience directly to your location. Whether it's a condo parking bay, your office, or your home, we work with the same level of precision you'd expect from a high-end detailing studio.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">What Drives Us</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            {
              icon: Award,
              title: 'Craftsmanship',
              description: 'Every detail matters. We take pride in delivering work that exceeds expectations.',
            },
            {
              icon: Shield,
              title: 'Quality Products',
              description: 'We use only proven, premium-grade products that protect and enhance your vehicle.',
            },
            {
              icon: Heart,
              title: 'Care & Respect',
              description: 'We treat every vehicle with the same care we\'d give our own. No exceptions.',
            },
            {
              icon: Wrench,
              title: 'Expertise',
              description: 'Years of experience working with everything from daily drivers to exotic vehicles.',
            },
          ].map((value, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <value.icon className="text-primary" size={32} />
              </div>
              <h3>{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Condo-Friendly Workflow */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl mb-4">Condo-Friendly Service</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've designed our workflow to work seamlessly in condos, apartments, and office buildings.
            </p>
          </div>

          <div className="space-y-8">
            <ProcessStep
              number="01"
              title="Self-Contained Setup"
              description="We bring our own water supply and power. No need to coordinate with building management or worry about access to utilities."
            />
            <ProcessStep
              number="02"
              title="Minimal Disruption"
              description="Quiet equipment, respectful work hours, and careful attention to shared spaces. We work around your building's guidelines."
            />
            <ProcessStep
              number="03"
              title="Professional Cleanup"
              description="We leave your parking bay cleaner than we found it. No water mess, no product residue, no trace we were there except your immaculate vehicle."
            />
          </div>
        </div>
      </Section>

      {/* Product Quality */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Premium Products, Proven Results</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We don't compromise on the products we use. Every product in our arsenal is chosen for performance, safety, and longevity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 border border-border rounded-lg bg-card/50">
              <h3>Exterior Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                pH-balanced shampoos, iron fallout removers, premium clay bars, and professional-grade compounds and polishes. We choose products that clean effectively without harming paint, clear coat, or protective films.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-border rounded-lg bg-card/50">
              <h3>Interior Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gentle yet effective cleaners for leather, fabric, plastics, and glass. Our conditioning treatments protect surfaces from UV damage and wear while maintaining that factory-fresh look and feel.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-border rounded-lg bg-card/50">
              <h3>Protection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Premium waxes, sealants, and ceramic spray coatings that provide lasting protection. We prep surfaces properly so protection products bond correctly and last longer.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-border rounded-lg bg-card/50">
              <h3>Specialty Products</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated products for chrome, glass, rubber, and trim. We use the right product for each surface to ensure optimal results and prevent damage.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="subtle">
        <div className="max-w-3xl mx-auto text-center space-y-6 py-12">
          <h2 className="text-3xl lg:text-4xl">Ready to Experience the Difference?</h2>
          <p className="text-xl text-muted-foreground">
            Let us show you what meticulous care looks like.
          </p>
          <div className="pt-4">
            <PrimaryButton onClick={() => onNavigate('booking')}>
              Request Booking
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </div>
  );
}