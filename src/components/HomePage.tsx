import React from 'react';
import { Shield, Home, Award, Users, ArrowRight } from 'lucide-react';
import { PrimaryButton } from './ui/PrimaryButton';
import { WhatsAppButton } from './ui/WhatsAppButton';
import { ServiceCard } from './ui/ServiceCard';
import { ProcessStep } from './ui/ProcessStep';
import { Section } from './ui/Section';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { BookingPreset } from '../App';

interface HomePageProps {
  onNavigate: (page: any, preset?: BookingPreset) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgxNTA4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury car interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
              Premium Mobile Detailing<br />Klang Valley
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              No overbooking. No shortcuts. Only meticulous craftsmanship at your location.
            </p>

            <p className="text-sm text-muted-foreground max-w-xl mx-auto microcopy">
              We limit daily capacity to maintain quality control on every vehicle.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <PrimaryButton onClick={() => onNavigate('booking')}>
                Request Booking
              </PrimaryButton>
              <WhatsAppButton variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Differentiation */}
      <Section background="subtle">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { icon: Award, label: 'Premium Products' },
            { icon: Home, label: 'Condo-Friendly' },
            { icon: Shield, label: 'Insured & Professional' },
            { icon: Users, label: 'Experienced Technicians' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="text-primary" size={28} />
              </div>
              <span className="text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Overview */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the service that matches your vehicle's needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Premium Detailing"
            description="Comprehensive interior and exterior detailing for vehicles that deserve exceptional care."
            priceFrom="RM 350"
            features={[
              'Full interior deep clean & conditioning',
              'Paint correction & ceramic coating prep',
              'Engine bay detailing',
              'Complete exterior wash & wax',
            ]}
            ctaText="Request Booking"
            onCtaClick={() => onNavigate('booking', { category: 'premium' })}
            highlighted={true}
          />

          <ServiceCard
            title="Maintenance Detailing"
            description="Regular upkeep to keep your vehicle looking fresh between comprehensive details."
            priceFrom="RM 180"
            features={[
              'Interior vacuum & wipe down',
              'Exterior wash & dry',
              'Wheel & tire cleaning',
              'Quick interior refresh',
            ]}
            ctaText="Request Booking"
            onCtaClick={() => onNavigate('booking', { category: 'maintenance' })}
          />

          <ServiceCard
            title="Corporate / Fleet"
            description="Tailored solutions for dealerships, property managers, and fleet operators."
            features={[
              'Volume pricing available',
              'Scheduled maintenance programs',
              'Flexible on-site service',
              'Custom service packages',
            ]}
            ctaText="Get a Quote"
            onCtaClick={() => onNavigate('fleet')}
          />
        </div>

        {/* Method A: subtle depth hint (homepage should show categories, not the full catalogue) */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Explore detailed interior, exterior, polishing, and ceramic coating services →
          </button>
        </div>
      </Section>

      {/* Process Section */}
      <Section background="subtle">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent process from request to results
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          <ProcessStep
            number="01"
            title="Request Booking"
            description="Submit your service request with vehicle details and preferred timing. We'll review availability and confirm within hours."
          />
          <ProcessStep
            number="02"
            title="Assessment & Confirmation"
            description="We'll confirm the service scope, timing, and final pricing based on your vehicle and location."
          />
          <ProcessStep
            number="03"
            title="On-Site Detailing"
            description="Our team arrives with all equipment and premium products. Relax while we transform your vehicle at your convenience."
          />
          <ProcessStep
            number="04"
            title="Aftercare & Follow-Up"
            description="Receive care instructions and maintenance tips. We're always available for questions or your next booking."
          />
        </div>
      </Section>

      {/* Gallery Preview */}
      <Section>
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">
            Selected Work
          </p>
          <h2 className="text-3xl lg:text-4xl mb-4">Real Vehicles. Real Results.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            'https://images.unsplash.com/photo-1593720083103-e7118f71cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY4MTg4ODI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1605437241278-c1806d14a4d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4MDc1NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            'https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjgxNTA4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          ].map((src, index) => (
            <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
              <ImageWithFallback
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>View All Work</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </Section>

      {/* Testimonials Preview */}
      <Section background="subtle">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">
            Proof of Quality
          </p>
          <h2 className="text-3xl lg:text-4xl mb-4">Trusted by Vehicle Owners Across Klang Valley</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from customers who trusted us with their vehicles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              quote: "Exceptional attention to detail. My BMW looks better than when I first bought it. The convenience of them coming to my condo was a game-changer.",
              author: "James L.",
              vehicle: "BMW 5 Series",
            },
            {
              quote: "Professional, punctual, and meticulous. They treated my Porsche with the respect it deserves. Highly recommend for anyone serious about car care.",
              author: "Sarah M.",
              vehicle: "Porsche 911",
            },
            {
              quote: "The ceramic coating prep was flawless. They took the time to explain every step and the results speak for themselves. Worth every ringgit.",
              author: "Daniel K.",
              vehicle: "Mercedes-Benz C-Class",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.vehicle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('testimonials')}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>View All Testimonials</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </Section>

      {/* Future Feature Teaser */}
      <Section>
        <div className="max-w-3xl mx-auto text-center py-12 border-t border-b border-border">
          <p className="text-lg text-muted-foreground">
            Membership & referral rewards launching soon.
          </p>
        </div>
      </Section>
    </div>
  );
}