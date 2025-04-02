
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AcademicInfoTabProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  goToNextTab: () => void;
  goToPreviousTab: () => void;
}

const AcademicInfoTab = ({
  formData,
  handleChange,
  goToNextTab,
  goToPreviousTab
}: AcademicInfoTabProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="classApplying">Desired Class Level</Label>
          <Select 
            value={formData.classApplying} 
            onValueChange={(value) => {
              const event = {
                target: {
                  name: "classApplying",
                  value: value,
                  type: "select"
                }
              } as unknown as React.ChangeEvent<HTMLSelectElement>;
              handleChange(event);
            }}
          >
            <SelectTrigger id="classApplying">
              <SelectValue placeholder="Select class level" />
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
          <Label htmlFor="currentSchool">Current School</Label>
          <Input
            id="currentSchool"
            name="currentSchool"
            placeholder="Enter the name of your current school"
            value={formData.currentSchool}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentClass">Current Class</Label>
          <Input
            id="currentClass"
            name="currentClass"
            placeholder="Enter your current class"
            value={formData.currentClass}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="schoolAddress">School Address</Label>
          <Textarea
            id="schoolAddress"
            name="schoolAddress"
            placeholder="Enter the address of your current school"
            value={formData.schoolAddress}
            onChange={handleChange}
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="yearsAttended">Years Attended</Label>
          <Input
            id="yearsAttended"
            name="yearsAttended"
            placeholder="e.g., 2019-2022"
            value={formData.yearsAttended}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="reasonForLeaving">Reason for Leaving</Label>
          <Textarea
            id="reasonForLeaving"
            name="reasonForLeaving"
            placeholder="Please explain why you are leaving your current school"
            value={formData.reasonForLeaving}
            onChange={handleChange}
            rows={3}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={goToPreviousTab}>
          Previous
        </Button>
        <Button onClick={goToNextTab}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default AcademicInfoTab;
