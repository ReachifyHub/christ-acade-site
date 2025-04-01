
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useSupabaseAuth } from '@/hooks/use-supabase-auth';

export const useContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useSupabaseAuth();

  const submitMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const messageData = {
        name,
        email,
        phone,
        subject,
        message_content: message,
        user_id: user?.id || null
      };

      // Store the message in the messages table
      const { error } = await supabase
        .from('messages')
        .insert([messageData]);

      if (error) {
        throw error;
      }

      toast.success("Your message has been sent successfully! We'll get back to you soon.");
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (error: any) {
      toast.error(error.message || "There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    subject,
    setSubject,
    message,
    setMessage,
    isSubmitting,
    submitMessage
  };
};
