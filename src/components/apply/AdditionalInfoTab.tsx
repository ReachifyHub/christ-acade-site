
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface AdditionalInfoTabProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  goToPreviousTab: () => void;
  isSubmitting: boolean;
}

const AdditionalInfoTab = ({ formData, handleChange, goToPreviousTab, isSubmitting }: AdditionalInfoTabProps) => {
  return (
    <div>
      <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Additional Information</h3>
      
      <div className="mb-6">
        <Label htmlFor="hobbies">Hobbies and Interests</Label>
        <Textarea 
          id="hobbies" 
          name="hobbies" 
          rows={3}
          placeholder="Please share the student's hobbies, interests, and extracurricular activities."
          value={formData.hobbies}
          onChange={handleChange}
        />
      </div>
      
      <div className="mb-6">
        <Label htmlFor="achievements">Academic or Other Achievements</Label>
        <Textarea 
          id="achievements" 
          name="achievements" 
          rows={3}
          placeholder="Please list any academic honors, awards, or other achievements."
          value={formData.achievements}
          onChange={handleChange}
        />
      </div>
      
      <div className="mb-6">
        <Label htmlFor="whyChristAcade">Why Christ Acade?*</Label>
        <Textarea 
          id="whyChristAcade" 
          name="whyChristAcade" 
          rows={4}
          placeholder="Please explain why you are interested in Christ Acade Group of School and what you hope to gain from the experience."
          value={formData.whyChristAcade}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="mb-6">
        <Label htmlFor="heardAbout">How did you hear about us?*</Label>
        <select
          id="heardAbout"
          name="heardAbout"
          className="w-full rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-school-primary"
          value={formData.heardAbout}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="Friend/Family">Friend or Family Referral</option>
          <option value="Internet Search">Internet Search</option>
          <option value="Social Media">Social Media</option>
          <option value="Advertisement">Advertisement</option>
          <option value="Current School">Current School</option>
          <option value="Educational Fair">Educational Fair</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className="mb-8">
        <Label htmlFor="specialNeeds">Special Needs or Accommodations</Label>
        <Textarea 
          id="specialNeeds" 
          name="specialNeeds" 
          rows={3}
          placeholder="Please share any special needs, accommodations, or medical conditions that may affect the student's education."
          value={formData.specialNeeds}
          onChange={handleChange}
        />
      </div>
      
      <div className="mb-8">
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            className="mt-1 rounded border-gray-300 text-school-primary focus:ring-school-primary"
            checked={formData.agreeTerms}
            onChange={handleChange}
            required
          />
          <Label htmlFor="agreeTerms" className="font-normal">
            I certify that all information provided in this application is true and accurate. I understand that providing false information may result in the denial of admission or withdrawal of an offer.*
          </Label>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={goToPreviousTab}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button 
          type="submit" 
          className="bg-school-primary hover:bg-school-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Application"
          )}
        </Button>
      </div>
    </div>
  );
};

export default AdditionalInfoTab;
