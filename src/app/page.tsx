import AboutSection from "@/components/home/about";
import Hero from "@/components/home/hero";
import PricingSection from "@/components/home/pricing";
import ServicesSection from "@/components/home/service";
import TestimonialsSection from "@/components/home/testimonials";

export default function Page() {
  return (
    <>
      <Hero id="hero-section" />
      <AboutSection />
      <ServicesSection id="services-section" />
      <TestimonialsSection id="tesimonial-section" />
      <PricingSection id="pricing-section" />
      {/* <ContactSection id="contact-section" /> */}
    </>
  );
}
