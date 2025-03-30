
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will contact you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Contact Us" }
        ]} 
      />

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Get in Touch"
            subtitle="We're Here to Help"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-school-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-school-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-school-primary mb-2">Our Location</h3>
              <p className="text-gray-600">
                123 Education Avenue<br />
                Knowledge City, State 12345<br />
                United States
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-school-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-school-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-school-primary mb-2">Phone Numbers</h3>
              <p className="text-gray-600">
                Main Office: (123) 456-7890<br />
                Admissions: (123) 456-7891<br />
                Student Services: (123) 456-7892
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-school-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-school-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-school-primary mb-2">Email Addresses</h3>
              <p className="text-gray-600">
                General Inquiries:<br />
                <a href="mailto:info@christacade.edu" className="text-school-primary hover:underline">info@christacade.edu</a><br />
                Admissions:<br />
                <a href="mailto:admissions@christacade.edu" className="text-school-primary hover:underline">admissions@christacade.edu</a>
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-school-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-school-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-school-primary mb-2">Office Hours</h3>
              <p className="text-gray-600">
                Monday - Friday:<br />
                7:30 AM - 4:30 PM<br />
                Saturday (Admin Office):<br />
                9:00 AM - 12:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-school-primary mb-6">Find Us</h2>
              <div className="rounded-lg overflow-hidden shadow-md h-96 mb-6">
                {/* Replace with an actual map component or embed */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00425368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2s!4v1674234456324!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Directions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-school-primary">From Downtown:</h4>
                    <p className="text-gray-600">Take Main Street north for 2 miles. Turn right onto Education Avenue. The school campus will be on your left.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-school-primary">From the Highway:</h4>
                    <p className="text-gray-600">Exit Highway 101 at Exit 25. Turn west onto College Boulevard. Turn left onto Education Avenue after 1 mile.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-school-primary">Public Transportation:</h4>
                    <p className="text-gray-600">Bus routes 15, 22, and 31 stop directly in front of the school. The nearest subway station is Central Station, a 10-minute walk away.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-school-primary mb-6">Send a Message</h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name*</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your full name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address*</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Your email address" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        placeholder="Your phone number" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject*</Label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-school-primary"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject...</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Admissions">Admissions</option>
                        <option value="Academic Programs">Academic Programs</option>
                        <option value="Athletics">Athletics</option>
                        <option value="School Events">School Events</option>
                        <option value="Employment">Employment</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message*</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message" 
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="rounded border-gray-300 text-school-primary focus:ring-school-primary"
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm font-normal">
                      I agree to the <a href="#" className="text-school-primary hover:underline">Privacy Policy</a> and consent to the processing of my data.
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-school-primary hover:bg-school-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Department Contacts"
            subtitle="Connect with the Right People"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-semibold text-school-primary border-b border-gray-200 pb-3 mb-4">Admissions Office</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  For inquiries about the application process, school tours, and enrollment.
                </p>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-school-secondary" />
                  <span>(123) 456-7891</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-school-secondary" />
                  <a href="mailto:admissions@christacade.edu" className="text-school-primary hover:underline">admissions@christacade.edu</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-4 h-4 mr-2 flex justify-center text-school-secondary">👤</span>
                  <span>Mrs. Sarah Johnson, Director of Admissions</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-semibold text-school-primary border-b border-gray-200 pb-3 mb-4">Academic Affairs</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  For questions about curriculum, academic programs, and educational policies.
                </p>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-school-secondary" />
                  <span>(123) 456-7893</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-school-secondary" />
                  <a href="mailto:academics@christacade.edu" className="text-school-primary hover:underline">academics@christacade.edu</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-4 h-4 mr-2 flex justify-center text-school-secondary">👤</span>
                  <span>Dr. Michael Chen, Academic Dean</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-semibold text-school-primary border-b border-gray-200 pb-3 mb-4">Student Services</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  For support related to student life, counseling, and pastoral care.
                </p>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-school-secondary" />
                  <span>(123) 456-7892</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-school-secondary" />
                  <a href="mailto:studentservices@christacade.edu" className="text-school-primary hover:underline">studentservices@christacade.edu</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-4 h-4 mr-2 flex justify-center text-school-secondary">👤</span>
                  <span>Mrs. Angela Williams, Dean of Students</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-semibold text-school-primary border-b border-gray-200 pb-3 mb-4">Athletics Department</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  For information about sports programs, schedules, and athletic opportunities.
                </p>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-school-secondary" />
                  <span>(123) 456-7894</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-school-secondary" />
                  <a href="mailto:athletics@christacade.edu" className="text-school-primary hover:underline">athletics@christacade.edu</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-4 h-4 mr-2 flex justify-center text-school-secondary">👤</span>
                  <span>Mr. Robert Martinez, Athletic Director</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-semibold text-school-primary border-b border-gray-200 pb-3 mb-4">Business Office</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  For matters related to tuition, fees, and financial matters.
                </p>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-school-secondary" />
                  <span>(123) 456-7895</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-school-secondary" />
                  <a href="mailto:business@christacade.edu" className="text-school-primary hover:underline">business@christacade.edu</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-4 h-4 mr-2 flex justify-center text-school-secondary">👤</span>
                  <span>Ms. Patricia Nguyen, Business Manager</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-semibold text-school-primary border-b border-gray-200 pb-3 mb-4">Alumni Relations</h3>
              <div className="space-y-3">
                <p className="text-gray-600">
                  For alumni events, networking opportunities, and staying connected.
                </p>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-school-secondary" />
                  <span>(123) 456-7896</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-school-secondary" />
                  <a href="mailto:alumni@christacade.edu" className="text-school-primary hover:underline">alumni@christacade.edu</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-4 h-4 mr-2 flex justify-center text-school-secondary">👤</span>
                  <span>Mr. David Thompson, Alumni Coordinator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Get Quick Answers"
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">What are the school hours?</h3>
              <p className="text-gray-600">
                School hours are Monday through Friday, 8:00 AM to 3:30 PM. Early drop-off is available starting at 7:15 AM, and after-school programs run until 6:00 PM.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">How do I schedule a school tour?</h3>
              <p className="text-gray-600">
                School tours can be scheduled by contacting our Admissions Office at (123) 456-7891 or by completing the request form on our Admissions page. Tours are typically available Monday through Friday, 9:00 AM to 2:00 PM.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">Where can I find the school calendar?</h3>
              <p className="text-gray-600">
                Our school calendar is available on the News & Events page of our website. It includes all school holidays, early dismissal days, parent-teacher conferences, and special events.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-serif font-semibold text-school-primary mb-2">How do I apply for financial aid?</h3>
              <p className="text-gray-600">
                Information about our financial aid program and application process can be found on the Admissions page. If you have specific questions, please contact our Business Office at (123) 456-7895.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-school-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest news, updates, and events from Christ Acade Group of School.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <Input 
                placeholder="Your email address" 
                type="email" 
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button type="submit" className="bg-school-secondary hover:bg-school-secondary/90 text-white whitespace-nowrap">
                Subscribe Now
              </Button>
            </form>
            <p className="text-sm text-white/60 mt-3">
              By subscribing, you agree to our <a href="#" className="underline hover:text-white">Privacy Policy</a> and consent to receive updates from Christ Acade Group of School.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
