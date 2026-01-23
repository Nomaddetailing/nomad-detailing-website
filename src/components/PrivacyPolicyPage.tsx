import React from "react";
import { Section } from "./ui/Section";

interface PrivacyPolicyPageProps {
  onNavigate: (page: any) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div>
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-sm tracking-wider uppercase text-muted-foreground">
              Legal
            </p>
            <h1 className="text-4xl lg:text-5xl tracking-tight mt-2">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mt-3">
              Last updated: {/* put your date here */}
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 lg:p-10 space-y-6 leading-relaxed">
            {/* Paste your Privacy Policy content here as headings + paragraphs */}
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="text-muted-foreground">
              {/* content */}
            </p>

            <h2 className="text-xl font-semibold">2. Personal Data We Collect</h2>
            <p className="text-muted-foreground">
              {/* content */}
            </p>

            {/* ... */}
          </div>
        </div>
      </Section>
    </div>
  );
}
