
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AcademicInfoTabProps {
  nextTab: () => void;
  prevTab: () => void;
  gradeLevel: string;
  setGradeLevel: (value: string) => void;
  previousSchool: string;
  setPreviousSchool: (value: string) => void;
  academicInterests: string;
  setAcademicInterests: (value: string) => void;
  extraActivities: string;
  setExtraActivities: (value: string) => void;
}

const AcademicInfoTab = ({
  nextTab,
  prevTab,
  gradeLevel,
  setGradeLevel,
  previousSchool,
  setPreviousSchool,
  academicInterests,
  setAcademicInterests,
  extraActivities,
  setExtraActivities,
}: AcademicInfoTabProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="grade-level">Desired Grade Level</Label>
          <Select value={gradeLevel} onValueChange={setGradeLevel} required>
            <SelectTrigger id="grade-level">
              <SelectValue placeholder="Select grade level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Primary 1">Primary 1</SelectItem>
              <SelectItem value="Primary 2">Primary 2</SelectItem>
              <SelectItem value="Primary 3">Primary 3</SelectItem>
              <SelectItem value="Primary 4">Primary 4</SelectItem>
              <SelectItem value="Primary 5">Primary 5</SelectItem>
              <SelectItem value="Primary 6">Primary 6</SelectItem>
              <SelectItem value="JSS 1">JSS 1</SelectItem>
              <SelectItem value="JSS 2">JSS 2</SelectItem>
              <SelectItem value="JSS 3">JSS 3</SelectItem>
              <SelectItem value="SSS 1">SSS 1</SelectItem>
              <SelectItem value="SSS 2">SSS 2</SelectItem>
              <SelectItem value="SSS 3">SSS 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="previous-school">Previous School</Label>
          <Input
            id="previous-school"
            placeholder="Enter the name of your previous school"
            value={previousSchool}
            onChange={(e) => setPreviousSchool(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="academic-interests">Academic Interests and Strengths</Label>
          <Textarea
            id="academic-interests"
            placeholder="What subjects or areas of study interest you the most?"
            value={academicInterests}
            onChange={(e) => setAcademicInterests(e.target.value)}
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="extra-activities">Extracurricular Activities</Label>
          <Textarea
            id="extra-activities"
            placeholder="What activities are you interested in pursuing outside of academics? (Sports, music, arts, etc.)"
            value={extraActivities}
            onChange={(e) => setExtraActivities(e.target.value)}
            rows={3}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={prevTab}>
          Previous
        </Button>
        <Button onClick={nextTab} disabled={!gradeLevel}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default AcademicInfoTab;
