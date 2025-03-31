
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ParentInfoTabProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  goToNextTab: () => void;
  goToPreviousTab: () => void;
}

const ParentInfoTab = ({ formData, handleChange, goToNextTab, goToPreviousTab }: ParentInfoTabProps) => {
  return (
    <div>
      <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Parent/Guardian Information</h3>
      
      <div className="mb-6">
        <h4 className="font-medium text-school-primary mb-2">Primary Parent/Guardian</h4>
        <Separator className="mb-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <Label htmlFor="parentName1">Full Name*</Label>
            <Input 
              id="parentName1" 
              name="parentName1" 
              value={formData.parentName1}
              onChange={handleChange}
              required 
            />
          </div>
          <div>
            <Label htmlFor="parentRelationship1">Relationship to Student*</Label>
            <select
              id="parentRelationship1"
              name="parentRelationship1"
              className="w-full rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-school-primary"
              value={formData.parentRelationship1}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="guardian">Legal Guardian</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <Label htmlFor="parentPhone1">Phone Number*</Label>
            <Input 
              id="parentPhone1" 
              name="parentPhone1" 
              type="tel" 
              value={formData.parentPhone1}
              onChange={handleChange}
              required 
            />
          </div>
          <div>
            <Label htmlFor="parentEmail1">Email Address*</Label>
            <Input 
              id="parentEmail1" 
              name="parentEmail1" 
              type="email" 
              value={formData.parentEmail1}
              onChange={handleChange}
              required 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="parentOccupation1">Occupation</Label>
            <Input 
              id="parentOccupation1" 
              name="parentOccupation1" 
              value={formData.parentOccupation1}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="parentEmployer1">Employer</Label>
            <Input 
              id="parentEmployer1" 
              name="parentEmployer1" 
              value={formData.parentEmployer1}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h4 className="font-medium text-school-primary mb-2">Secondary Parent/Guardian (Optional)</h4>
        <Separator className="mb-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <Label htmlFor="parentName2">Full Name</Label>
            <Input 
              id="parentName2" 
              name="parentName2" 
              value={formData.parentName2}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="parentRelationship2">Relationship to Student</Label>
            <select
              id="parentRelationship2"
              name="parentRelationship2"
              className="w-full rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-school-primary"
              value={formData.parentRelationship2}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="guardian">Legal Guardian</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <Label htmlFor="parentPhone2">Phone Number</Label>
            <Input 
              id="parentPhone2" 
              name="parentPhone2" 
              type="tel" 
              value={formData.parentPhone2}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="parentEmail2">Email Address</Label>
            <Input 
              id="parentEmail2" 
              name="parentEmail2" 
              type="email" 
              value={formData.parentEmail2}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="parentOccupation2">Occupation</Label>
            <Input 
              id="parentOccupation2" 
              name="parentOccupation2" 
              value={formData.parentOccupation2}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="parentEmployer2">Employer</Label>
            <Input 
              id="parentEmployer2" 
              name="parentEmployer2" 
              value={formData.parentEmployer2}
              onChange={handleChange}
            />
          </div>
        </div>
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

export default ParentInfoTab;
