
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AcademicInfoTabProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  goToNextTab: () => void;
  goToPreviousTab: () => void;
}

const AcademicInfoTab = ({ formData, handleChange, goToNextTab, goToPreviousTab }: AcademicInfoTabProps) => {
  return (
    <div>
      <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Academic Information</h3>
      
      <div className="mb-6">
        <Label htmlFor="gradeApplying">Grade Applying For*</Label>
        <select
          id="gradeApplying"
          name="gradeApplying"
          className="w-full rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-school-primary"
          value={formData.gradeApplying}
          onChange={handleChange}
          required
        >
          <option value="">Select Grade...</option>
          <option value="K">Kindergarten</option>
          <option value="1">1st Grade</option>
          <option value="2">2nd Grade</option>
          <option value="3">3rd Grade</option>
          <option value="4">4th Grade</option>
          <option value="5">5th Grade</option>
          <option value="6">6th Grade</option>
          <option value="7">7th Grade</option>
          <option value="8">8th Grade</option>
          <option value="9">9th Grade</option>
          <option value="10">10th Grade</option>
          <option value="11">11th Grade</option>
          <option value="12">12th Grade</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="currentSchool">Current School*</Label>
          <Input 
            id="currentSchool" 
            name="currentSchool" 
            value={formData.currentSchool}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <Label htmlFor="currentGrade">Current Grade*</Label>
          <select
            id="currentGrade"
            name="currentGrade"
            className="w-full rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-school-primary"
            value={formData.currentGrade}
            onChange={handleChange}
            required
          >
            <option value="">Select Grade...</option>
            <option value="PreK">Pre-Kindergarten</option>
            <option value="K">Kindergarten</option>
            <option value="1">1st Grade</option>
            <option value="2">2nd Grade</option>
            <option value="3">3rd Grade</option>
            <option value="4">4th Grade</option>
            <option value="5">5th Grade</option>
            <option value="6">6th Grade</option>
            <option value="7">7th Grade</option>
            <option value="8">8th Grade</option>
            <option value="9">9th Grade</option>
            <option value="10">10th Grade</option>
            <option value="11">11th Grade</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <Label htmlFor="schoolAddress">School Address*</Label>
        <Input 
          id="schoolAddress" 
          name="schoolAddress" 
          value={formData.schoolAddress}
          onChange={handleChange}
          required 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="yearsAttended">Years Attended*</Label>
          <Input 
            id="yearsAttended" 
            name="yearsAttended" 
            value={formData.yearsAttended}
            onChange={handleChange}
            required 
          />
        </div>
      </div>
      
      <div className="mb-8">
        <Label htmlFor="reasonForLeaving">Reason for Leaving Current School</Label>
        <Textarea 
          id="reasonForLeaving" 
          name="reasonForLeaving" 
          rows={3}
          value={formData.reasonForLeaving}
          onChange={handleChange}
        />
      </div>
      
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={goToPreviousTab}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button type="button" onClick={goToNextTab}>
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AcademicInfoTab;
