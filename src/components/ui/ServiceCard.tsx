import React from 'react';
import { PrimaryButton } from './PrimaryButton';

interface ServiceCardProps {
  title: string;
  description: string;
  priceFrom?: string;
  features: string[];
  ctaText: string;
  onCtaClick: () => void;
  highlighted?: boolean;
}

export function ServiceCard({
  title,
  description,
  priceFrom,
  features,
  ctaText,
  onCtaClick,
  highlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={`
        relative p-8 lg:p-10 rounded-xl border transition-all duration-300
        ${highlighted 
          ? 'bg-card border-primary/50 shadow-xl shadow-primary/10' 
          : 'bg-card/50 border-border hover:border-primary/30'
        }
      `}
    >
      {highlighted && (
        <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm">
          Most Popular
        </div>
      )}
      
      <div className="space-y-6">
        <div>
          <h3 className="mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {priceFrom && (
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-muted-foreground">From</span>
              <span className="text-2xl">{priceFrom}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Final pricing depends on vehicle size, condition, and access.
            </p>
          </div>
        )}

        <div className="space-y-3 py-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <PrimaryButton
          onClick={onCtaClick}
          variant={highlighted ? 'primary' : 'outline'}
          className="w-full"
        >
          {ctaText}
        </PrimaryButton>
      </div>
    </div>
  );
}
