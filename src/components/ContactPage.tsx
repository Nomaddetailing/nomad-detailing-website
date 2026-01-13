import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { Section } from './ui/Section';
import { PrimaryButton } from './ui/PrimaryButton';
import { WhatsAppButton } from './ui/WhatsAppButton';

interface ContactPageProps {
  onNavigate: (page: any) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-background">
      {/* Page Header */}
      <Section>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl lg:text-5xl tracking-tight">Get in Touch</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Questions about our services? Want a custom quote? We're here to help.
          </p>
        </div>
      </Section>

      {/* Contact Methods & Form */}
      <Section background="subtle">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2">WhatsApp</h4>
                    <p className="text-muted-foreground mb-3">
                      Fastest way to reach us
                    </p>
                    <WhatsAppButton text="Chat with Us" variant="primary" className="inline-flex" />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2">Email</h4>
                    <a
                      href="mailto:hello@nomaddetailing.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@nomaddetailing.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2">Service Area</h4>
                    <p className="text-muted-foreground">
                      Klang Valley & surrounding areas
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Outside Klang Valley? Contact us for availability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="mb-2">Response Time</h4>
                    <p className="text-muted-foreground">
                      We typically respond within 2-4 hours during business hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="mb-4">Corporate / Fleet Inquiries</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For dealerships, property managers, or fleet operators, please use the contact form or WhatsApp to discuss custom solutions and volume pricing.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-lg p-8 lg:p-10">
              <h2 className="text-2xl mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Mail className="text-primary" size={32} />
                  </div>
                  <h3>Message Sent!</h3>
                  <p className="text-muted-foreground">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="service">Service Question</option>
                      <option value="corporate">Corporate / Fleet</option>
                      <option value="booking">Booking Question</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <PrimaryButton type="submit" className="w-full">
                      Send Message
                    </PrimaryButton>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    For immediate assistance, please use WhatsApp
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Do you service outside Klang Valley?',
                answer: 'While our primary service area is Klang Valley, we can accommodate requests from surrounding areas. Please contact us to discuss availability and any additional travel fees.',
              },
              {
                question: 'How long does a detailing service take?',
                answer: 'Premium Detailing typically takes 4-6 hours, while Maintenance Detailing takes 2-3 hours. Times may vary based on vehicle size and condition.',
              },
              {
                question: 'Do you work in covered parking?',
                answer: 'Yes, we\'re fully equipped to work in condo and office parking bays. We bring our own water supply and power, and follow all building guidelines.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept bank transfer and cash. Payment details will be provided upon booking confirmation.',
              },
              {
                question: 'Do you offer corporate or fleet discounts?',
                answer: 'Yes, we offer custom pricing for corporate clients and fleet operators. Please contact us to discuss your specific needs.',
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-0">
                <h3 className="mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}