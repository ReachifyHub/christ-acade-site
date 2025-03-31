
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";

// Application components
import ApplicationStatus from "@/components/apply/ApplicationStatus";
import ApplicationSuccess from "@/components/apply/ApplicationSuccess";
import ApplicationNotes from "@/components/apply/ApplicationNotes";
import PersonalInfoTab from "@/components/apply/PersonalInfoTab";
import AcademicInfoTab from "@/components/apply/AcademicInfoTab";
import ParentInfoTab from "@/components/apply/ParentInfoTab";
import AdditionalInfoTab from "@/components/apply/AdditionalInfoTab";

// Mock authentication (in a real app, this would be connected to a backend)
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
    lga: "", // Added Local Government Area
    
    // Academic Information
    classApplying: "", // Changed from gradeApplying to classApplying
    currentSchool: "",
    currentClass: "", // Changed from currentGrade to currentClass
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
          classApplying: formData.classApplying, // Changed from gradeApplying to classApplying
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
    return <ApplicationSuccess onViewStatus={() => setViewMode("status")} />;
  }

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
              <ApplicationStatus 
                applications={applications} 
                onNewApplication={() => setViewMode("form")} 
              />
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
              <div className="p-6 bg-school-primary text-white">
                <h2 className="text-2xl font-serif font-bold">Student Application Form</h2>
                <p className="text-white/80">Complete all required fields to submit your application</p>
              </div>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                {/* Improved responsive tab navigation */}
                <div className="px-4 sm:px-6 pt-6">
                  <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 gap-1">
                    <TabsTrigger 
                      value="personal"
                      className="text-xs sm:text-sm px-1 sm:px-3 py-2 whitespace-normal h-auto min-h-[40px] text-center"
                    >
                      Personal Info
                    </TabsTrigger>
                    <TabsTrigger 
                      value="academic"
                      className="text-xs sm:text-sm px-1 sm:px-3 py-2 whitespace-normal h-auto min-h-[40px] text-center"
                    >
                      Academic Info
                    </TabsTrigger>
                    <TabsTrigger 
                      value="parent"
                      className="text-xs sm:text-sm px-1 sm:px-3 py-2 whitespace-normal h-auto min-h-[40px] text-center"
                    >
                      Parent/Guardian
                    </TabsTrigger>
                    <TabsTrigger 
                      value="additional"
                      className="text-xs sm:text-sm px-1 sm:px-3 py-2 whitespace-normal h-auto min-h-[40px] text-center"
                    >
                      Additional Info
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <TabsContent value="personal" className="p-6">
                    <PersonalInfoTab 
                      formData={formData} 
                      handleChange={handleChange} 
                      goToNextTab={goToNextTab} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="academic" className="p-6">
                    <AcademicInfoTab 
                      formData={formData} 
                      handleChange={handleChange} 
                      goToNextTab={goToNextTab} 
                      goToPreviousTab={goToPreviousTab} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="parent" className="p-6">
                    <ParentInfoTab 
                      formData={formData} 
                      handleChange={handleChange} 
                      goToNextTab={goToNextTab} 
                      goToPreviousTab={goToPreviousTab} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="additional" className="p-6">
                    <AdditionalInfoTab 
                      formData={formData} 
                      handleChange={handleChange} 
                      goToPreviousTab={goToPreviousTab} 
                      isSubmitting={isSubmitting} 
                    />
                  </TabsContent>
                </form>
              </Tabs>
            </div>
          )}
          
          <ApplicationNotes />
        </div>
      </div>
    </div>
  );
};

export default Apply;
