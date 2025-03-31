
import { useState } from "react";
import Hero from "@/components/Hero";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLinks";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";
import FaqSection from "@/components/contact/FaqSection";

const Contact = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Get In Touch"
        description="Have a question or need more information? We're here to help. Reach out to us through any of the channels below."
        image="https://images.unsplash.com/photo-1586769852044-692d6e3703f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        small={true}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <ContactInfo />
                <SocialLinks />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
};

export default Contact;
