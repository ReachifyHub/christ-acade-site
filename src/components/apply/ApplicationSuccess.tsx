
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ApplicationSuccessProps {
  onViewStatus: () => void;
}

const ApplicationSuccess = ({ onViewStatus }: ApplicationSuccessProps) => {
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
            Our admissions team will review your application and contact you within 5-7 business days regarding the next steps in the admissions process for the 2025-2026 academic year.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild>
              <Link to="/">Return to Homepage</Link>
            </Button>
            <Button onClick={onViewStatus} variant="outline">
              View Application Status
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSuccess;
