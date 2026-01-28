import React from 'react';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/60189877906"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/30 hover:scale-110 transition-transform duration-200"
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} className="text-primary-foreground" />
    </a>
  );
}
