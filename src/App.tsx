import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { GalleryPage } from "./components/GalleryPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { BookingFlow } from "./components/BookingFlow";
import { TestimonialsPage } from "./components/TestimonialsPage";
import { CorporateFleetPage } from "./components/CorporateFleetPage";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";
import { ScrollToTop } from "./components/ui/ScrollToTop";

type Page =
  | "home"
  | "services"
  | "gallery"
  | "testimonials"
  | "fleet"
  | "about"
  | "contact"
  | "booking";

export type BookingPreset = {
  // Entry point context to remove redundant selections.
  // category: chosen from homepage (premium | maintenance | corporate)
  // service: a specific service chosen from services page or internal selector
  // variant: sub-selection for services such as Ceramic Coating duration
  category?: "premium" | "maintenance" | "corporate";
  service?: string;
  variant?: string;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [bookingPreset, setBookingPreset] = useState<BookingPreset>({});

  const handleNavigate = (page: Page, preset?: BookingPreset) => {
    if (page === "booking") {
      setBookingPreset(preset ?? {});
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main className="pt-20">
        {currentPage === "home" && (
          <HomePage onNavigate={handleNavigate} />
        )}
        {currentPage === "services" && (
          <ServicesPage onNavigate={handleNavigate} />
        )}
        {currentPage === "gallery" && (
          <GalleryPage onNavigate={handleNavigate} />
        )}
        {currentPage === "testimonials" && (
          <TestimonialsPage onNavigate={handleNavigate} />
        )}
        {currentPage === "fleet" && (
          <CorporateFleetPage onNavigate={handleNavigate} />
        )}
        {currentPage === "about" && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === "contact" && (
          <ContactPage onNavigate={handleNavigate} />
        )}
        {currentPage === "booking" && (
          <BookingFlow onNavigate={handleNavigate} preset={bookingPreset} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}