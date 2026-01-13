import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'subtle';
}

export function Section({ children, className = '', id, background = 'default' }: SectionProps) {
  const bgStyles = {
    default: 'bg-background',
    subtle: 'bg-card/30',
  };

  return (
    <section 
      id={id}
      className={`py-20 lg:py-28 ${bgStyles[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
}
