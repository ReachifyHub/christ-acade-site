
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdmissionInquiryForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [gradeApplying, setGradeApplying] = useState("");
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const inquiryData = {
        name,
        email,
        phone,
        child_name: childName,
        grade_applying: gradeApplying,
        question,
        type: "admission_inquiry"
      };

      // Store the message in the messages table
      const { error } = await supabase
        .from('messages')
        .insert([inquiryData]);

      if (error) {
        throw error;
      }

      toast.success("Your inquiry has been sent successfully! We'll get back to you soon.");
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setChildName("");
      setGradeApplying("");
      setQuestion("");
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
            <Label htmlFor="parentName">Parent/Guardian Name</Label>
            <Input
              id="parentName"
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
              placeholder="+234 XXX XXX XXXX"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="childName">Child's Name</Label>
            <Input
              id="childName"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="Child's full name"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="gradeApplying">Grade Applying For</Label>
          <Select 
            value={gradeApplying} 
            onValueChange={setGradeApplying}
            required
          >
            <SelectTrigger id="gradeApplying">
              <SelectValue placeholder="Select grade level" />
            </SelectTrigger>
            <SelectContent>
              {/* Nigerian Education System Classes */}
              <SelectItem value="Nursery 1">Nursery 1</SelectItem>
              <SelectItem value="Nursery 2">Nursery 2</SelectItem>
              <SelectItem value="Nursery 3">Nursery 3</SelectItem>
              <SelectItem value="Primary 1">Primary 1</SelectItem>
              <SelectItem value="Primary 2">Primary 2</SelectItem>
              <SelectItem value="Primary 3">Primary 3</SelectItem>
              <SelectItem value="Primary 4">Primary 4</SelectItem>
              <SelectItem value="Primary 5">Primary 5</SelectItem>
              <SelectItem value="Primary 6">Primary 6</SelectItem>
              <SelectItem value="JSS 1">JSS 1 (Junior Secondary School)</SelectItem>
              <SelectItem value="JSS 2">JSS 2 (Junior Secondary School)</SelectItem>
              <SelectItem value="JSS 3">JSS 3 (Junior Secondary School)</SelectItem>
              <SelectItem value="SSS 1">SSS 1 (Senior Secondary School)</SelectItem>
              <SelectItem value="SSS 2">SSS 2 (Senior Secondary School)</SelectItem>
              <SelectItem value="SSS 3">SSS 3 (Senior Secondary School)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="question">Your Question or Message</Label>
          <Textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="What would you like to know about our admissions process?"
            rows={5}
            required
          />
        </div>
        <Button
          type="submit"
          className="bg-school-primary hover:bg-school-primary/90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default AdmissionInquiryForm;
