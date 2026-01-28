import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="flex gap-6 items-start">
        <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/30 bg-card flex items-center justify-center">
          <span className="text-primary">{number}</span>
        </div>
        <div className="flex-1 pt-1">
          <h4 className="mb-2">{title}</h4>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
