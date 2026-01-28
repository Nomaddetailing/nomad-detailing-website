import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const baseStyles =
  "inline-flex h-12 items-center justify-center gap-2 px-8 rounded-lg transition-all duration-200";

export function WhatsAppButton({ 
  text = 'WhatsApp Us', 
  variant = 'outline',
  className = '' 
}: WhatsAppButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-200';
  
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-border',
    outline: 'border-2 border-border text-muted-foreground hover:border-primary/50 hover:text-foreground',
  };

  return (
    <a
      href="https://wa.me/60189877906"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={20} />
      <span>{text}</span>
    </a>
  );
}
