import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ChevronRight, ChevronLeft, Clock, XCircle, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";

// Mock authentication and application system (in a real app, this would be connected to a backend)
const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

const Apply = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("personal");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applications, setApplications] = useState<any[]>([]);
  const [viewMode, setViewMode] = useState<"form" | "status">("form");
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    
    // Academic Information
    gradeApplying: "",
    currentSchool: "",
    currentGrade: "",
    schoolAddress: "",
    yearsAttended: "",
    reasonForLeaving: "",
    
    // Parent/Guardian Information
    parentName1: "",
    parentRelationship1: "",
    parentPhone1: "",
    parentEmail1: "",
    parentOccupation1: "",
    parentEmployer1: "",
    parentName2: "",
    parentRelationship2: "",
    parentPhone2: "",
    parentEmail2: "",
    parentOccupation2: "",
    parentEmployer2: "",
    
    // Additional Information
    hobbies: "",
    achievements: "",
    whyChristAcade: "",
    heardAbout: "",
    specialNeeds: "",
    agreeTerms: false
  });

  // Load applications from localStorage on component mount
  useEffect(() => {
    if (!isAuthenticated()) {
      toast({
        title: "Authentication Required",
        description: "Please log in to apply for admission.",
        variant: "destructive",
      });
      navigate("/login", { state: { returnUrl: "/apply" } });
      return;
    }

    // Load any existing applications
    const savedApplications = localStorage.getItem("applications");
    if (savedApplications) {
      setApplications(JSON.parse(savedApplications));
    }
  }, [navigate, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate submission to a backend
      setTimeout(() => {
        // Create a new application object
        const newApplication = {
          id: Date.now().toString(),
          studentName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          gradeApplying: formData.gradeApplying,
          submittedAt: new Date().toISOString(),
          status: "Pending",
          formData: { ...formData }
        };
        
        // Update applications in state and localStorage
        const updatedApplications = [...applications, newApplication];
        setApplications(updatedApplications);
        localStorage.setItem("applications", JSON.stringify(updatedApplications));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast({
          title: "Application Submitted",
          description: "We've received your application. Our admissions team will contact you soon.",
          variant: "default",
        });
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  };

  const goToNextTab = () => {
    if (activeTab === "personal") setActiveTab("academic");
    else if (activeTab === "academic") setActiveTab("parent");
    else if (activeTab === "parent") setActiveTab("additional");
  };

  const goToPreviousTab = () => {
    if (activeTab === "additional") setActiveTab("parent");
    else if (activeTab === "parent") setActiveTab("academic");
    else if (activeTab === "academic") setActiveTab("personal");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-school-primary mb-4">Application Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for applying to Christ Acade Group of School. Your application has been received and is being processed. You will receive an email confirmation shortly.
            </p>
            <p className="text-gray-600 mb-8">
              Our admissions team will review your application and contact you within 5-7 business days regarding the next steps in the admissions process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <Link to="/">Return to Homepage</Link>
              </Button>
              <Button onClick={() => setViewMode("status")} variant="outline">
                View Application Status
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderApplicationStatus = () => {
    if (applications.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-600">You haven't submitted any applications yet.</p>
          <Button className="mt-4" onClick={() => setViewMode("form")}>
            Apply Now
          </Button>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-serif font-semibold text-school-primary mb-4">Your Applications</h3>
        
        {applications.map((app, index) => (
          <div key={app.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium">{app.studentName}</h4>
                <p className="text-sm text-gray-600">Grade: {app.gradeApplying}</p>
                <p className="text-sm text-gray-600">Submitted: {new Date(app.submittedAt).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center">
                {app.status === "Pending" && (
                  <div className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Pending</span>
                  </div>
                )}
                {app.status === "Approved" && (
                  <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    <span>Approved</span>
                  </div>
                )}
                {app.status === "Rejected" && (
                  <div className="flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full">
                    <XCircle className="w-4 h-4 mr-1" />
                    <span>Rejected</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h5 className="font-medium mb-2">Application Details</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><span className="font-medium">Email:</span> {app.email}</p>
                  <p><span className="font-medium">Phone:</span> {app.formData.phone}</p>
                </div>
                <div>
                  <p><span className="font-medium">Current School:</span> {app.formData.currentSchool}</p>
                  <p><span className="font-medium">Current Grade:</span> {app.formData.currentGrade}</p>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                {/* In a real app, this would display the full application details */}
                <Button variant="outline" size="sm">View Full Application</Button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex justify-center mt-8">
          <Button onClick={() => setViewMode("form")}>Submit New Application</Button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <PageHeader 
        title="Apply for Admission" 
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Admissions", link: "/admissions" },
          { label: "Apply" }
        ]} 
      />

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* View Toggle */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                  viewMode === "form" 
                    ? "bg-school-primary text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } border border-school-primary`}
                onClick={() => setViewMode("form")}
              >
                Apply
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                  viewMode === "status" 
                    ? "bg-school-primary text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-50"
                } border border-l-0 border-school-primary`}
                onClick={() => setViewMode("status")}
              >
                Application Status
              </button>
            </div>
          </div>
          
          {viewMode === "status" ? (
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8 p-6">
              {renderApplicationStatus()}
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
              <div className="p-6 bg-school-primary text-white">
                <h2 className="text-2xl font-serif font-bold">Student Application Form</h2>
                <p className="text-white/80">Complete all required fields to submit your application</p>
              </div>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="px-6 pt-6">
                  <TabsList className="grid grid-cols-4 w-full">
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="academic">Academic Info</TabsTrigger>
                    <TabsTrigger value="parent">Parent/Guardian</TabsTrigger>
                    <TabsTrigger value="additional">Additional Info</TabsTrigger>
                  </TabsList>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <TabsContent value="personal" className="p-6">
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
                  </TabsContent>
                  
                  
                  <TabsContent value="academic" className="p-6">
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
                  </TabsContent>
                  
                  
                  <TabsContent value="parent" className="p-6">
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
                  </TabsContent>
                  
                  
                  <TabsContent value="additional" className="p-6">
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
                  </TabsContent>
                </form>
              </Tabs>
            </div>
          )}
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-serif font-semibold text-school-primary mb-4">Important Notes:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>A non-refundable application fee of $100 will be due after submission of this form.</li>
              <li>You will need to submit the following documents separately:
                <ul className="list-circle pl-5 mt-2 space-y-1">
                  <li>Birth certificate (copy)</li>
                  <li>Academic records from the past 2-3 years</li>
                  <li>Teacher recommendation forms</li>
                  <li>Standardized test scores (if applicable)</li>
                  <li>Immunization records</li>
                </ul>
              </li>
              <li>All fields marked with an asterisk (*) are required.</li>
              <li>For questions about the application process, please contact our Admissions Office at (123) 456-7891.</li>
