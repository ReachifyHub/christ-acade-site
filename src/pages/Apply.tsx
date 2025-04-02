import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import PersonalInfoTab from "@/components/apply/PersonalInfoTab";
import AcademicInfoTab from "@/components/apply/AcademicInfoTab";
import ParentInfoTab from "@/components/apply/ParentInfoTab";
import AdditionalInfoTab from "@/components/apply/AdditionalInfoTab";
import ApplicationSuccess from "@/components/apply/ApplicationSuccess";
import ApplicationStatus from "@/components/apply/ApplicationStatus";
import ApplicationNotes from "@/components/apply/ApplicationNotes";
import ApplicationTabs from "@/components/apply/ApplicationTabs";
import { useSupabaseAuth } from "@/hooks/use-supabase-auth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import PageHeader from "@/components/PageHeader";

const Apply = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const { user } = useSupabaseAuth();
  const [formData, setFormData] = useState({
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
    classApplying: "",
    currentSchool: "",
    currentClass: "",
    schoolAddress: "",
    yearsAttended: "",
    reasonForLeaving: "",
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
    hobbies: "",
    achievements: "",
    whyChristAcade: "",
    heardAbout: "",
    specialNeeds: "",
    agreeTerms: false,
  });

  // Mock applications for demonstration
  const applications = [
    {
      id: 1,
      studentName: "John Doe",
      gradeApplying: "JSS 1",
      submittedAt: "2023-12-15T10:30:00",
      status: "Pending",
      email: "john.doe@example.com",
      formData: {
        phone: "+234 901 234 5678",
        currentSchool: "Previous Elementary School",
        currentGrade: "Primary 6"
      }
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const goToNextTab = () => {
    setActiveTab(prevTab => Math.min(prevTab + 1, 3));
  };

  const goToPreviousTab = () => {
    setActiveTab(prevTab => Math.max(prevTab - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const studentName = `${formData.firstName} ${formData.lastName}`;
      
      // For demonstration, we'll just simulate a successful submission
      // In a real app, you'd save this to Supabase
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (user) {
        // Save application to Supabase
        const { error } = await supabase
          .from('applications')
          .insert([
            { 
              application_name: `Application for ${studentName}`,
              user_id: user.id
            }
          ]);
          
        if (error) throw error;
      }
      
      toast.success("Application submitted successfully!");
      setApplicationSubmitted(true);
    } catch (error: any) {
      toast.error(error.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleViewStatus = () => {
    setShowStatus(true);
  };

  const handleNewApplication = () => {
    setShowStatus(false);
    setApplicationSubmitted(false);
    setActiveTab(0);
    setFormData({
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
      classApplying: "",
      currentSchool: "",
      currentClass: "",
      schoolAddress: "",
      yearsAttended: "",
      reasonForLeaving: "",
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
      hobbies: "",
      achievements: "",
      whyChristAcade: "",
      heardAbout: "",
      specialNeeds: "",
      agreeTerms: false,
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <PersonalInfoTab formData={formData} handleChange={handleChange} goToNextTab={goToNextTab} />;
      case 1:
        return <AcademicInfoTab formData={formData} handleChange={handleChange} goToNextTab={goToNextTab} goToPreviousTab={goToPreviousTab} />;
      case 2:
        return <ParentInfoTab formData={formData} handleChange={handleChange} goToNextTab={goToNextTab} goToPreviousTab={goToPreviousTab} />;
      case 3:
        return <AdditionalInfoTab formData={formData} handleChange={handleChange} goToPreviousTab={goToPreviousTab} isSubmitting={isSubmitting} />;
      default:
        return null;
    }
  };

  const tabTitles = ["Personal Info", "Academic Info", "Parent/Guardian Info", "Additional Info"];

  if (applicationSubmitted) {
    return <ApplicationSuccess onViewStatus={handleViewStatus} />;
  }

  if (showStatus) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ApplicationStatus applications={applications} onNewApplication={handleNewApplication} />
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Application Form"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Apply" }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 md:p-8">
              <ApplicationTabs 
                activeTab={activeTab} 
                onChange={setActiveTab} 
                tabs={tabTitles} 
              />
              
              <form onSubmit={handleSubmit} className="mt-6">
                {renderTabContent()}
              </form>
            </CardContent>
          </Card>

          <ApplicationNotes />
        </div>
      </div>
    </div>
  );
};

export default Apply;
