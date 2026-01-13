import React from 'react';
import { MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: any) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="tracking-tight">Nomad Detailing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Premium mobile car detailing in Klang Valley. Meticulous care, delivered to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4>Quick Links</h4>
            <div className="space-y-3">
              <button
                onClick={() => onNavigate('services')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => onNavigate('booking')}
                className="block text-primary hover:text-primary/80 transition-colors"
              >
                Request Booking
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Our Work
              </button>
              <button
                onClick={() => onNavigate('testimonials')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => onNavigate('fleet')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Corporate / Fleet
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4>Contact</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/60189877906"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <MessageCircle size={18} className="text-primary" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:hello@nomaddetailing.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={18} className="text-primary" />
                <span>hello@nomaddetailing.com</span>
              </a>
            </div>
          </div>

          {/* Service Area */}
          <div className="space-y-4">
            <h4>Service Area</h4>
            <p className="text-muted-foreground leading-relaxed">
              Klang Valley & surrounding areas
            </p>
            <p className="text-sm text-muted-foreground">
              Outside Klang Valley? Contact us for a custom quote.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nomad Detailing. All rights reserved.
          </p>
          <button
            onClick={() => onNavigate('fleet')}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Corporate / Fleet Solutions
          </button>
        </div>
      </div>
    </footer>
  );
}
