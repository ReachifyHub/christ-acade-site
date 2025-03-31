
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface PersonalInfoTabProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  goToNextTab: () => void;
}

const PersonalInfoTab = ({ formData, handleChange, goToNextTab }: PersonalInfoTabProps) => {
  return (
    <div>
      <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Student Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="firstName">First Name*</Label>
          <Input 
            id="firstName" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name*</Label>
          <Input 
            id="lastName" 
            name="lastName" 
            value={formData.lastName}
            onChange={handleChange}
            required 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="email">Email Address*</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number*</Label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel" 
            value={formData.phone}
            onChange={handleChange}
            required 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="dateOfBirth">Date of Birth*</Label>
          <Input 
            id="dateOfBirth" 
            name="dateOfBirth" 
            type="date" 
            value={formData.dateOfBirth}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <Label htmlFor="gender">Gender*</Label>
          <select
            id="gender"
            name="gender"
            className="w-full rounded-md border border-gray-300 p-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-school-primary"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <Label htmlFor="address">Address*</Label>
        <Input 
          id="address" 
          name="address" 
          value={formData.address}
          onChange={handleChange}
          required 
        />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <div className="col-span-2">
          <Label htmlFor="city">City*</Label>
          <Input 
            id="city" 
            name="city" 
            value={formData.city}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <Label htmlFor="state">State/Province*</Label>
          <Input 
            id="state" 
            name="state" 
            value={formData.state}
            onChange={handleChange}
            required 
          />
        </div>
        <div>
          <Label htmlFor="zipCode">Zip/Postal Code*</Label>
          <Input 
            id="zipCode" 
            name="zipCode" 
            value={formData.zipCode}
            onChange={handleChange}
            required 
          />
        </div>
      </div>
      
      <div className="mb-8">
        <Label htmlFor="country">Country*</Label>
        <Input 
          id="country" 
          name="country" 
          value={formData.country}
          onChange={handleChange}
          required 
        />
      </div>
      
      <div className="flex justify-end">
        <Button type="button" onClick={goToNextTab}>
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoTab;
