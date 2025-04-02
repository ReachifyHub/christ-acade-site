
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useSupabaseAuth } from "@/hooks/use-supabase-auth";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useSupabaseAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const inquiryData = {
        name,
        email,
        phone,
        subject,
        message_content: message,
        user_id: user?.id || null,
        created_at: new Date().toISOString(),
        status: 'new'
      };

      // Store the inquiry in the inquiries table
      const { error } = await supabase
        .from('inquiries')
        .insert([inquiryData]);

      if (error) {
        throw error;
      }

      toast.success("Your inquiry has been submitted successfully! We'll get back to you soon.");
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (error: any) {
      toast.error(error.message || "There was an error sending your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="font-medium text-lg text-school-primary mb-4">Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="08XXXXXXXXX"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="How can we help you?"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here..."
            rows={5}
            required
          />
        </div>
        <Button
          type="submit"
          className="bg-school-primary hover:bg-school-primary/90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit Inquiry"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
