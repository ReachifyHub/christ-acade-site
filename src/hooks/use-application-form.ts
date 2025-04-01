
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useSupabaseAuth } from '@/hooks/use-supabase-auth';

export const useApplicationForm = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { user } = useSupabaseAuth();

  // Personal Information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>();
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("Nigerian");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("Lagos");
  const [city, setCity] = useState("Lagos");

  // Parent Information
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentAddress, setParentAddress] = useState("");
  const [relationship, setRelationship] = useState("");
  const [occupation, setOccupation] = useState("");

  // Academic Information
  const [gradeLevel, setGradeLevel] = useState("");
  const [previousSchool, setPreviousSchool] = useState("");
  const [academicInterests, setAcademicInterests] = useState("");
  const [extraActivities, setExtraActivities] = useState("");

  // Additional Information
  const [healthInfo, setHealthInfo] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [howHeard, setHowHeard] = useState("");

  const nextTab = () => {
    if (currentTab < 3) {
      setCurrentTab(currentTab + 1);
    }
  };

  const prevTab = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };

  const submitApplication = async () => {
    setIsSubmitting(true);

    try {
      if (!user) {
        toast.error("You must be logged in to submit an application");
        setIsSubmitting(false);
        return;
      }
      
      // Format application data
      const applicationData = {
        application_name: `${firstName} ${lastName} - ${gradeLevel}`,
        user_id: user.id,
        personal_info: {
          firstName,
          lastName,
          dateOfBirth,
          gender,
          nationality,
          address,
          state,
          city
        },
        parent_info: {
          name: parentName,
          email: parentEmail,
          phone: parentPhone,
          address: parentAddress,
          relationship,
          occupation
        },
        academic_info: {
          gradeLevel,
          previousSchool,
          academicInterests,
          extraActivities
        },
        additional_info: {
          healthInfo,
          otherInfo,
          howHeard
        },
        application_date: new Date().toISOString(),
        status: "pending"
      };

      // Insert to applications table
      const { data, error } = await supabase
        .from('applications')
        .insert([applicationData]);

      if (error) {
        throw error;
      }

      toast.success("Your application has been submitted successfully!");
      setIsSubmitted(true);
    } catch (error: any) {
      toast.error(error.message || "There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    currentTab,
    nextTab,
    prevTab,
    isSubmitting,
    isSubmitted,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
    nationality,
    setNationality,
    address,
    setAddress,
    state,
    setState,
    city,
    setCity,
    parentName,
    setParentName,
    parentEmail,
    setParentEmail,
    parentPhone,
    setParentPhone,
    parentAddress,
    setParentAddress,
    relationship,
    setRelationship,
    occupation,
    setOccupation,
    gradeLevel,
    setGradeLevel,
    previousSchool,
    setPreviousSchool,
    academicInterests,
    setAcademicInterests,
    extraActivities,
    setExtraActivities,
    healthInfo,
    setHealthInfo,
    otherInfo,
    setOtherInfo,
    howHeard,
    setHowHeard,
    submitApplication
  };
};
