import React from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";
import { PrimaryButton } from "./ui/PrimaryButton";

interface TestimonialsPageProps {
  onNavigate: (page: any) => void;
}

type Testimonial = {
  quote: string;
  author: string;
  vehicle?: string;
};

export function TestimonialsPage({ onNavigate }: TestimonialsPageProps) {
  // Anchor testimonial: higher visual weight for faster trust-building.
  const anchor: Testimonial = {
    quote:
      "Professional, punctual, and meticulous. They treated my Porsche with the respect it deserves. Highly recommend for anyone serious about car care.",
    author: "Sarah M.",
    vehicle: "Porsche 911",
  };

  const rest: Testimonial[] = [
    {
      quote:
        "Exceptional attention to detail. My BMW looks better than when I first bought it. The convenience of them coming to my condo was a game-changer.",
      author: "James L.",
      vehicle: "BMW 5 Series",
    },
    {
      quote:
        "The ceramic coating prep was flawless. They took the time to explain every step and the results speak for themselves. Worth every ringgit.",
      author: "Daniel K.",
      vehicle: "Mercedes-Benz C-Class",
    },
    {
      quote:
        "Booked a maintenance detail for my daily driver and the consistency is excellent. Clear communication, on-time arrival, and a finish that lasts.",
      author: "Aiman R.",
      vehicle: "Honda Civic",
    },
    {
      quote:
        "They were careful around sensitive trim and paint. The end result felt like a proper reset rather than a quick wash.",
      author: "Wei K.",
      vehicle: "Tesla Model 3",
    },
    {
      quote:
        "Clean process, no overpromising. They assessed the condition first and explained what to expect. The outcome matched exactly.",
      author: "Farah N.",
      vehicle: "Mazda CX-5",
    },
  ];

  return (
    <div>
      <Section>
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-4 tracking-wider uppercase">
            Testimonials
          </p>
          <h1 className="text-4xl lg:text-5xl mb-4 tracking-tight">
            What Our Customers Say
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real feedback from customers who trusted us with their vehicles.
          </p>
        </div>

        {/* Anchor testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-10 lg:p-12">
            <p className="text-xl lg:text-2xl leading-relaxed italic text-foreground/90">
              “{anchor.quote}”
            </p>
            <div className="mt-8">
              <p className="text-base font-medium">{anchor.author}</p>
              {anchor.vehicle && (
                <p className="text-sm text-muted-foreground">{anchor.vehicle}</p>
              )}
            </div>
          </div>
        
          {/* Supporting testimonials */}
          <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-8">
            {rest.map((t, idx) => (
              <div
                key={idx}
                className="bg-card/60 border border-border rounded-lg p-8 space-y-4"
              >
                <p className="text-muted-foreground leading-relaxed italic">
                  “{t.quote}”
                </p>
                <div>
                  <p className="font-medium">{t.author}</p>
                  {t.vehicle && (
                    <p className="text-sm text-muted-foreground">{t.vehicle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        
          {/* CTA */}
          <div className="mt-14 md:mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryButton onClick={() => onNavigate("booking")}>
              Request Booking
            </PrimaryButton>
        
            <button
              onClick={() => onNavigate("gallery")}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>View Our Work</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </Section>
    </div>
  );
}
