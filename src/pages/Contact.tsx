
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Mail, MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Hero from "@/components/Hero";

// Import WhatsApp and TikTok icons
import { MessageCircle as WhatsApp, Video as TikTok } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

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
                <SectionTitle
                  title="Contact Information"
                  subtitle="Ways to Reach Us"
                  alignment="left"
                />
                
                <div className="space-y-6 mt-6">
                  <div className="flex items-start">
                    <div className="bg-school-accent p-3 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-school-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-school-primary">Address</h3>
                      <p className="text-gray-600 mt-1">No. 3B Owoeye Street, Ayetoro Area, Osogbo, Osun State</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-school-accent p-3 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-school-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-school-primary">Phone</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="tel:08102473418" className="hover:text-school-primary transition-colors">
                          08102473418
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-school-accent p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-school-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-school-primary">Email</h3>
                      <p className="text-gray-600 mt-1">
                        <a href="mailto:christacadegroupofschool@gmail.com" className="hover:text-school-primary transition-colors">
                          christacadegroupofschool@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-school-accent p-3 rounded-lg mr-4">
                      <Clock className="w-6 h-6 text-school-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-school-primary">Office Hours</h3>
                      <p className="text-gray-600 mt-1">Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="mt-8">
                  <h3 className="font-medium text-lg text-school-primary mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://wa.me/2348102473418"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <WhatsApp className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@christacadegroup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                      aria-label="TikTok"
                    >
                      <TikTok className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-school-primary mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <>
                    <SectionTitle
                      title="Send Us a Message"
                      subtitle="Get in Touch"
                      alignment="left"
                    />
                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name*
                          </label>
                          <Input id="name" required />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address*
                          </label>
                          <Input id="email" type="email" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <Input id="phone" type="tel" />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject*
                          </label>
                          <Input id="subject" required />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message*
                        </label>
                        <Textarea id="message" rows={6} required />
                      </div>
                      
                      <div>
                        <Button 
                          type="submit" 
                          className="w-full bg-school-primary hover:bg-school-primary/90"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Visit Our Campus"
            subtitle="Find Us"
          />
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-[400px] w-full">
              {/* Replace with an actual Google Map embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.356764982788!2d4.566172!3d7.4227199999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10381dcdbc649a8f%3A0x8c60f01e3c6d150!2sAyetoro%2C%20Osogbo!5e0!3m2!1sen!2sng!4v1716215050230!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Common Inquiries"
          />
          <div className="max-w-3xl mx-auto mt-8 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">What are your office hours?</h3>
              <p className="text-gray-600">
                Our administrative office is open Monday through Friday from 8:00 AM to 4:00 PM, and Saturday from 9:00 AM to 12:00 PM. The office is closed on Sundays and public holidays.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">How can I schedule a campus tour?</h3>
              <p className="text-gray-600">
                To schedule a campus tour, please contact our admissions office at 08102473418 or send an email to christacadegroupofschool@gmail.com. Tours are typically available during regular school hours.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">How do I apply for admission?</h3>
              <p className="text-gray-600">
                You can apply for admission through our website by visiting the Admissions page and completing the online application form. If you have any questions about the application process, please contact our admissions office.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
