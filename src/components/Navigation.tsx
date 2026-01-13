import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { BookingPreset } from '../App';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: any, preset?: BookingPreset) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', page: 'services' },
    { label: 'Booking', page: 'booking', priority: true },
    { label: 'Our Work', page: 'gallery' },
    { label: 'Corporate / Fleet', page: 'fleet' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page as any);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl tracking-tight text-logo-gold hover:text-logo-gold/80 transition-colors"
          >
            Nomad Detailing
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`
                  transition-colors relative
                  ${currentPage === item.page ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}
                  ${item.priority ? 'text-primary hover:text-primary/80' : ''}
                `}
              >
                {item.label}
                {currentPage === item.page && (
                  <span className="absolute -bottom-6 left-0 right-0 h-px bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`
                  block w-full text-left py-3 transition-colors
                  ${currentPage === item.page ? 'text-foreground' : 'text-muted-foreground'}
                  ${item.priority ? 'text-primary' : ''}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}